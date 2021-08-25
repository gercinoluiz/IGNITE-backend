FROM node:latest

# O Diretorio que vou ter o docker file
WORKDIR /home/vlenin/Documents/IGNITE/backend/project

COPY package.json ./

RUN yarn install

# Copiar tudo de . para tudo do diretorioa
COPY . .  

#Porta que vou expor

EXPOSE 3333

#Script que vou rodar
CMD ["yarn", "dev"]

## AGORA VC RODA O COMANDO docker buld -t nomedaimagem onde ta o docker file