 

## Install & Run Laravel
-Run xampp on your windows and turn on PHP, mysql server <br/>
-Open root folder & run 'composer install' on your terminal
-Set the DB information on .env
-Run 'php artisan migrate --seed' on your terminal
-Run 'php artisan serve' on your terminal

## Run Python Service
-Install python on your windows
-Open ai_interface folder and activate the venv by running '.venv/Scripts/activate' on your terninal
-Run python service by running 'flask --app api run' on your terminal

## Test through postman
-Set the parameters with form-data method
    key1: query, example value: 'hello, I like your service, ...'
    key2: uid, example value: 'abc123' // user id
-Call 'http://localhost:8000/api/apitest' with the above parameters 

 
