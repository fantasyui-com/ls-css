# ls-css
List information about CSS file.

## Usage

Read from STDIN

```Bash

curl -s https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha/css/bootstrap.min.css | npx -q ls-css

```

Read from file

```Bash

curl -s https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css > file.css
npx -q ls-css file.css | wc -l

```

curl -s https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha/css/bootstrap.min.css | npx -q ls-css

## Example

$ curl -s https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha/css/bootstrap.min.css | npx -q ls-css | wc -l
641

$ curl -s https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css | npx -q ls-css | wc -l
669

$ curl -s https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.3/css/bootstrap.min.css | npx -q ls-css | wc -l
675

$ curl -s https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.4/css/bootstrap.min.css | npx -q ls-css | wc -l
671

$ curl -s https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css | npx -q ls-css | wc -l
690

$ curl -s https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css | npx -q ls-css | wc -l
1292
