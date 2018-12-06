export const htmlTemplate = (reactDom) => {
    return `
    <!DOCTYPE html>
    <html>
    
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700|Montserrat:100,300,400,500,700" rel="stylesheet">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/media.css" />
    
        <title>TheKolorbox - Home</title>
    </head>
    
    <body>
        <div id="kolorboxWeb">
            ${ reactDom}
        </div>
        <!--Scripts-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"></script>
        <script src="js/script.js"></script>
        <script src="./app.bundle.js"></script>
    </body>
    </html>
    `;
}