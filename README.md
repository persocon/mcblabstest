# 🚨DEPRECATED 🚨

# MCBLabs Test

## to install:

```
npm install
```

## to run the project on development:

```
make watch
```
then open `http://localhost:8080`

## run the tests:

```
make test-watch
```
or

```
make test
```
for single run usage

## Deploy:
when running for the first time, make sure to add the remote git with the heroku cli and also configure the heroku server:

```
heroku buildpacks:set heroku/nodejs
heroku git:remote -a <heroku git instance>
```
and after that generate the dist files:

```
make dist
```
and then deploy:

```
make deploy
```

## For more commands:

```
make help
```
