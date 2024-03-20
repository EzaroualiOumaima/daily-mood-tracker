# "this readme file will be modified at a later time"

<br/>
<br/>
<h1 align="center"> Daily mood tracker</h1>

# Docker image

https://hub.docker.com/r/oumaeza/react-app
<br/>

# Docker

- docker uses Containers to run applications in isolated environments with specific dependencies.
- docker main purpose is to maintain containers

## Virtual machines vs containers

- VM has its own full operating system running on top of your pc operating system and is typically slower.
- Containers share the host operating system & typically quicker.

## images

- blueprint for containers and what they contain :

  - OS and/or runtime environment
  - app source code
  - configuration files ( ex: .env)
  - commands (for the app to run and work)

- images are readonly and cannot be modified once they are generated

## containers:

- containers are runable instances of images
- they are run in an isolated environment and work independently

## making of images:

- an image is made of many layers and the layers order matters !
</br>
</br>
<p style="width:100%; text-align:center;font-weight:bold;font-size:20px">Image</p>
<table border="1" style="width:90%; margin-inline:auto; text-align:center;">
<tr>
<td col-span="3" border="2">Dependencies</td>
</tr>
<tr>
<td col-span="3" border="2">Source code</td>
</tr>
<tr>
<td col-span="3" border="2">Parent Image</td>
</tr>
</table>

### Parent image :

- OS and sometimes runtime environment from Dockerhub.

# create images

```
docker build -t imagename (dockerfilelocation)
```

# create container from image

```
docker run --name containername -p TARGET_PORT:EXPOSED_PORT imagename
```

# run container

```
docker start containername
```

# delete all images / containers / images

docker system prune -a

# Live preview

https://app-8a5126c1.zvgz4d.on-acorn.io/
https://acorn.io/medthevorg/acorn
