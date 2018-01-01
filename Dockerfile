FROM mhart/alpine-node:9.3.0
RUN mkdir -p /user/src/app
# check every 30s to ensure this service returns HTTP 200
HEALTHCHECK CMD curl -fs http://localhost:$PORT/healthz || exit 1
WORKDIR  /user/src/app
COPY ["package.json", "npm-shrinkwrap.json*", "yarn.lock" , "./"]
RUN yarn install
RUN cd /user/src/app && yarn
COPY .  /user/src/app
EXPOSE 3000 5858 9229
CMD ["yarn", "start"]
