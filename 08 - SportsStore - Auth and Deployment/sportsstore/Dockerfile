FROM node:10.14.1

RUN mkdir -p /usr/src/sportsstore

COPY build /usr/src/sportsstore/build

COPY authMiddleware.js /usr/src/sportsstore/
COPY productionData.json /usr/src/sportsstore/
COPY server.js /usr/src/sportsstore/
COPY deploy-package.json /usr/src/sportsstore/package.json

COPY serverQueriesSchema.graphql /usr/src/sportsstore/
COPY serverQueriesResolver.js /usr/src/sportsstore/
COPY serverMutationsSchema.graphql /usr/src/sportsstore/
COPY serverMutationsResolver.js /usr/src/sportsstore/

WORKDIR /usr/src/sportsstore

RUN echo 'package-lock=false' >> .npmrc

RUN npm install

EXPOSE 80

CMD ["node", "server.js", "./productionData.json", "80"]
