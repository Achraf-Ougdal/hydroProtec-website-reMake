This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

----------------------------------------------------------------------------------------------------------------------------------------

set serveroutput on size 30000;

CREATE OR REPLACE PROCEDURE omnicdc_enable_db IS
    v_already_enabled NUMBER;
BEGIN

    SELECT COUNT(*) INTO v_already_enabled FROM user_tables WHERE table_name='OMNICDC_CHANGE_TABLES';
    IF (v_already_enabled=0) THEN
        EXECUTE IMMEDIATE 'CREATE TABLE OMNICDC_CHANGE_TABLES(
                                TableName VARCHAR(50),
                                CreateDate VARCHAR(50)
                            )';
        dbms_output.put_line('OMNICDC WAS ENABLED SUCCESSFULLY IN THIS DATABASE');
    ELSE
        dbms_output.put_line('OMNICDC IS ALREADY ENABLED IN THIS DATABASE');
    END IF;
    
END omnicdc_enable_db;
/
CREATE OR REPLACE PROCEDURE omnicdc_disable_db IS
    v_table_name VARCHAR(4000);
    v_trigger_name user_triggers.trigger_name%TYPE;
    CURSOR c_tablesDrop IS SELECT table_name FROM user_tables WHERE table_name LIKE 'OMNICDC%';
    CURSOR c_triggersDrop IS SELECT trigger_name FROM user_triggers WHERE trigger_name LIKE 'OMNICDC%';
BEGIN
 
    OPEN c_tablesDrop;
    OPEN c_triggersDrop;
            LOOP
                FETCH c_tablesDrop INTO v_table_name;
                EXIT WHEN c_tablesDrop%NOTFOUND;
                EXECUTE IMMEDIATE 'DROP TABLE ' || v_table_name;
            END LOOP;
            LOOP
                FETCH c_triggersDrop INTO v_trigger_name;
                EXIT WHEN c_triggersDrop%NOTFOUND;
                EXECUTE IMMEDIATE 'DROP TRIGGER ' || v_trigger_name;
            END LOOP;
    CLOSE c_tablesDrop;
    CLOSE c_triggersDrop;
    dbms_output.put_line('OMNICDC WAS DISABLED SUCCESSFULLY IN THIS DATABASE');    
END omnicdc_disable_db;
/
CREATE OR REPLACE PROCEDURE omnicdc_trigger_table(p_table_name IN VARCHAR) IS
    v_trigger_query VARCHAR(4000) :='CREATE OR REPLACE TRIGGER ';
    v_ct_table_name VARCHAR(4000) := 'OMNICDC_' || p_table_name || '_CT';
    CURSOR c_cols_cursor IS SELECT COLUMN_NAME FROM user_tab_columns WHERE table_name=''||p_table_name;
    v_colname VARCHAR(100);
BEGIN
        dbms_output.put_line('Trigger procedure');
        v_trigger_query := v_trigger_query || 'OMNICDC_TRIGGER_' || p_table_name ||' AFTER INSERT OR UPDATE OR DELETE ON ' || p_table_name||' FOR EACH ROW
                                                    DECLARE
                                                        v_seq NUMBER;
                                                    BEGIN
                                                        SELECT COUNT(*) INTO v_seq FROM '|| v_ct_table_name ||';
                                                        v_seq:=v_seq+1;
                                                        IF INSERTING THEN
                                                            INSERT INTO ' || v_ct_table_name || ' VALUES(';
                                                                OPEN c_cols_cursor;
                                                                LOOP
                                                                    FETCH c_cols_cursor INTO v_colname;
                                                                    EXIT WHEN c_cols_cursor%NOTFOUND;
                                                                    v_trigger_query := v_trigger_query || ':NEW.' || v_colname || ',';
                                                                END LOOP;
                                                                CLOSE c_cols_cursor;
                                                                v_trigger_query := v_trigger_query || 'v_seq, 2);
                                                        ELSIF UPDATING THEN
                                                                INSERT INTO ' || v_ct_table_name || ' VALUES(';
                                                                    OPEN c_cols_cursor;
                                                                    LOOP
                                                                        FETCH c_cols_cursor INTO v_colname;
                                                                        EXIT WHEN c_cols_cursor%NOTFOUND;
                                                                        v_trigger_query := v_trigger_query || ':OLD.' || v_colname || ',';
                                                                    END LOOP;
                                                                    CLOSE c_cols_cursor;
                                                                v_trigger_query := v_trigger_query || 'v_seq, 3);
                                                                INSERT INTO ' || v_ct_table_name || ' VALUES(';
                                                                    OPEN c_cols_cursor;
                                                                    LOOP
                                                                        FETCH c_cols_cursor INTO v_colname;
                                                                        EXIT WHEN c_cols_cursor%NOTFOUND;
                                                                        v_trigger_query := v_trigger_query || ':NEW.' || v_colname || ',';
                                                                    END LOOP;
                                                                    CLOSE c_cols_cursor;
                                                                v_trigger_query := v_trigger_query || 'v_seq, 4);
                                                        ELSIF DELETING THEN
                                                            INSERT INTO ' || v_ct_table_name || ' VALUES(';
                                                                    OPEN c_cols_cursor;
                                                                    LOOP
                                                                        FETCH c_cols_cursor INTO v_colname;
                                                                        EXIT WHEN c_cols_cursor%NOTFOUND;
                                                                        v_trigger_query := v_trigger_query || ':OLD.' || v_colname || ',';
                                                                    END LOOP;
                                                                    CLOSE c_cols_cursor;
                                                                v_trigger_query := v_trigger_query || 'v_seq, 1);
                                                        END IF;
                                                        END;
                                                    ';   
                                                    EXECUTE IMMEDIATE v_trigger_query;
END omnicdc_trigger_table;
/
CREATE OR REPLACE PROCEDURE omnicdc_enable_table(p_table_name IN VARCHAR) IS
    v_omnicdc_enabled NUMBER;
    v_omnicdc_table_enabled NUMBER;
    v_seq INTEGER;
    v_ct_table_name VARCHAR(4000);
BEGIN
    SELECT COUNT(*) INTO v_omnicdc_enabled FROM user_tables WHERE table_name='OMNICDC_CHANGE_TABLES';
    SELECT COUNT(*) INTO v_omnicdc_table_enabled FROM user_tables WHERE table_name='OMNICDC_'||p_table_name||'_CT';
    IF (v_omnicdc_enabled=0) THEN
        dbms_output.put_line('OMNICDC IS NOT ENABLED IN THIS DATABASE. RUN OMNICDC_ENABLE_DB to ENABLE CDC IN THIS DATABASE');
    ELSIF (v_omnicdc_table_enabled>0) THEN
        dbms_output.put_line('OMNICDC IS ALREADY ENABLED FOR THIS TABLE');
    ELSE
        v_ct_table_name := 'OMNICDC_' || p_table_name || '_CT';
        EXECUTE IMMEDIATE 'CREATE TABLE '||v_ct_table_name|| ' AS SELECT * FROM ' || p_table_name || ' WHERE ROWNUM <= 0 ';
        EXECUTE IMMEDIATE 'ALTER TABLE ' || v_ct_table_name || ' ADD (ID_CT INTEGER)';
        EXECUTE IMMEDIATE 'ALTER TABLE ' || v_ct_table_name || ' ADD (OPERATION_TYPE INTEGER)';
        EXECUTE IMMEDIATE 'INSERT INTO OMNICDC_CHANGE_TABLES VALUES (' || chr(39) || v_ct_table_name || chr(39) || ', ' || chr(39) || SYSDATE || chr(39) || ')';
        omnicdc_trigger_table(p_table_name);
		dbms_output.put_line('OMNICDC WAS ENABLED SUCCESSFULLY IN THIS TABLE');
    END IF; 
END omnicdc_enable_table;
/
CREATE OR REPLACE PROCEDURE omnicdc_disable_table(p_table_name IN VARCHAR) IS
    v_omnicdc_enabled NUMBER;
    v_omnicdc_table_enabled NUMBER;
BEGIN
    SELECT COUNT(*) INTO v_omnicdc_enabled FROM user_tables WHERE table_name='OMNICDC_CHANGE_TABLES';
    SELECT COUNT(*) INTO v_omnicdc_table_enabled FROM user_tables WHERE table_name='OMNICDC_'||p_table_name||'_CT';
    IF (v_omnicdc_enabled=0) THEN
        dbms_output.put_line('OMNICDC IS NOT ENABLED IN THIS DATABASE. RUN OMNICDC_ENABLE_DB to ENABLE CDC IN THIS DATABASE');
    ELSIF (v_omnicdc_table_enabled=0) THEN
        dbms_output.put_line('OMNICDC IS NOT ENABLED FOR THIS TABLE');
    ELSE
        EXECUTE IMMEDIATE 'DROP TABLE OMNICDC_' || p_table_name || '_CT';
        EXECUTE IMMEDIATE 'DROP TRIGGER OMNICDC_TRIGGER_' || p_table_name;
        EXECUTE IMMEDIATE 'DELETE FROM OMNICDC_CHANGE_TABLES WHERE TABLENAME=''OMNICDC_'||p_table_name||'_CT''';
        dbms_output.put_line('OMNICDC WAS DISABLED SUCCESSFULLY FOR THIS TABLE');   
    END IF; 
END omnicdc_disable_table;
/
EXECUTE omnicdc_enable_db();
EXECUTE omnicdc_disable_db();
EXECUTE omnicdc_enable_table('CLIENTS');
EXECUTE omnicdc_disable_table('CLIENTS');
