<template>
    <h1>HOME PAGE!</h1>
    <router-link to="/login">Login</router-link>

    <button @click="newTask">Criar task</button>

    <button @click="changeToken">Trocar token</button>
</template>

<script>
export default {
    methods: {
        async newTask() {
            const url =
                "https://fir-auto-52031-default-rtdb.firebaseio.com/tasks.json?auth=eyJhbGciOiJSUzI1NiIsImtpZCI6IjlhNTE5MDc0NmU5M2JhZTI0OWIyYWE3YzJhYTRlMzA2M2UzNDFlYzciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmlyLWF1dG8tNTIwMzEiLCJhdWQiOiJmaXItYXV0by01MjAzMSIsImF1dGhfdGltZSI6MTY5NjYyMTMyOCwidXNlcl9pZCI6Imp4Yk4zTkVXRVBjRkNlRlZXS0pjMkZhVTI3bzEiLCJzdWIiOiJqeGJOM05FV0VQY0ZDZUZWV0tKYzJGYVUyN28xIiwiaWF0IjoxNjk2NjIxNTczLCJleHAiOjE2OTY2MjUxNzMsImVtYWlsIjoicGVkcm9AdGVzdGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInBlZHJvQHRlc3RlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.otZVD4GWKke3uOJEqbZnjJOqo-OTRJFJQDAeJZ3WBZ-84KWUzuMBVH-lOCdsAtETh_50cZloNqoUWaRDETV9xp261Dpv1ih1S01D0X976aTcDX8kMcz-Pqy94Ul91PoCe6esS26nHisqnY5UKgoT4ZuYKxrYVWMEI_i8zXBNYjIK7FDAnhl7-yejbOQue87vKoCPu1KE_DK-6W4_ATZW4SeW2ZE8tlUJW5IH67gUl7-pi-kaBdgQcmwl3VdMix9uMZ67mKYoLYfeexGd5LXJgy6EuZPZjrdaFSMoEFRTdDYlmIeCzpZOqJvbjAhdRxdqyZkYyORIWZq5XHmRJv4g8A";

            const task = {
                text: "Uma task!!",
                userId: "jxbN3NEWEPcFCeFVWKJc2FaU27o1",
                belongsTo: "pedro@teste.com",
            };

            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(task),
                });

                const json = await response.json();

                console.log(response);
                console.log(json);
            } catch (error) {
                console.log(error);
            }
        },

        async changeToken() {
            const url =
                "https://securetoken.googleapis.com/v1/token?key=AIzaSyAla-mQbcxUcvmZntY846uIIwsVlWB_trQ";

            const options = {
                grant_type: "refresh_token",
                refresh_token:
                    "AMf-vBxCeCPBxoFRJAhePwmizimtSmycXzjTNNJCxZ_3eIAFQqWcgYN4d0ylx01uj3GpyNwgeATOuvCRkKZVpLzSFd5lDNANL7mMZUrzibetPUE5zMarZLvmT0RnKmMfGBfeORdP50NM1x7Lql4QipEws1f1WjGicnZ6fkof2_QCB7-7adnavfk2mMv_K8jDGKjyNMuVEIUT2tJ32S_PuUCgRiFU1BHdcQ",
            };

            try {
                const requestOptions = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: new URLSearchParams(options).toString(),
                };

                const request = new Request(url, requestOptions);

                const response = await fetch(request);
                const json = await response.json();

                console.log(response);
                console.log(json);
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
