# README
Using Node 6.x

`server/app.js` listens on `localhost:3000`

## Docker Build
Build the docker file which installs everything

```
docker build -t name-of-image

# Run in Detached mode so it does not close
# <HostPort:DockerPort>
docker run -d -p 80:3000 name-of-image --name friendly-name

# Login to the container if needed
docker attach friendly-name
```

## Frontend
Using gulp, edit the `/src` files and have gulp listening with `gulp`.


## Manual Development
We can manually Develop by following the instructions below.

### Install dependencies:
```
cd server && npm install
```

### Run the App
Run from anywhere:
```
node server/app.js
```

Debug from the `server/` folder:
```
DEBUG=server:* npm start
```

