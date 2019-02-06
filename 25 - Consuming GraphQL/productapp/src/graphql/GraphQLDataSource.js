import Axios from "axios";
import * as allQueries from "./queries";
import * as allMutations from "./mutations";

export class GraphQLDataSource {

    constructor(dataType, errorCallback) {
        this.GRAPHQL_URL = "http://localhost:3600/graphql";        
        this.queries = allQueries[dataType];
        this.mutations = allMutations[dataType];
        this.handleError = errorCallback;
    }

    GetData(callback) {
        this.SendRequest(callback, this.queries.getAll);
    }

    GetOne(id, callback) {
        this.SendRequest(callback, this.queries.getOne, { id });
    }

    Store(data, callback) {
        this.SendRequest(callback, this.mutations.store, { ...data });
    }

    Update(data, callback) {
        this.Store(data, callback);
    }

    Delete(data, callback) {
        this.SendRequest(callback, this.mutations.delete, { id: data.id });
    }

    async SendRequest(callback, query, data) {
        try {
            let payload = {
                query: query.graphql,
                variables: data == null ? null : { ...data }
            }
            callback((await Axios.post(this.GRAPHQL_URL,
                payload)).data.data[query.name]);
        } catch(err) {
            this.handleError("Operation Failed: Network Error");            
        }
    }
}
