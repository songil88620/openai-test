 

## Install & Run Laravel
-Run xampp on your windows and turn on PHP, mysql server <br/>
-Open root folder & run 'composer install' on your terminal <br/>
-Set the DB information on .env <br/>
-Run 'php artisan migrate --seed' on your terminal <br/>
-Run 'php artisan serve' on your terminal <br/>

## Run Python Service
-Install python on your windows <br/>
-Open ai_interface folder and activate the venv by running '.venv/Scripts/activate' on your terninal <br/>
-Run python service by running 'flask --app api run' on your terminal <br/>

## Test through postman
-Set the parameters with form-data method <br/>
    key1: query, example value: 'hello, I like your service, ...' <br/>
    key2: uid, example value: 'abc123' // user id <br/>
-Call 'http://localhost:8000/api/apitest' with the above parameters  <br/>

## Case
<img src='https://github.com/songil88620/openai-test/blob/main/1.PNG'/>
<img src='https://github.com/songil88620/openai-test/blob/main/2.PNG'/>
