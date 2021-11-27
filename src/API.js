import Axios from 'axios'

const API = Axios.create({
    baseURL: 'someApiUrl',
    withCredentials: true
})

const APIFetcher = {
    postUserOrdering: async function (questionId, groupIds) {
        return await post('urlforodering/' + questionId, {order: groupIds})
    },
    getAnswerClusters: async function (questionId) {
        return {
            "id": 1,
            "text": "What is the answer to life, the universe, and everything?",
            "answerGroups": [
                {
                    "id": 1,
                    "answers": [
                        {
                            "id": 2,
                            "text": "some close answer"
                        },
                        {
                            "id": 3,
                            "text": "some other close answer"
                        }
                    ]
                },
                {
                    "id": 2,
                    "answers": [
                        {
                            "id": 4,
                            "text": "far answer"
                        },
                        {
                            "id": 5,
                            "text": "wrong answer"
                        },
                        {
                            "id": 6,
                            "text": "faaaaar"
                        }
                    ]
                },
                {
                    "id": 3,
                    "answers": [
                        {
                            "id": 4,
                            "text": "very far answer"
                        },
                        {
                            "id": 5,
                            "text": "wrong answer"
                        },
                        {
                            "id": 6,
                            "text": "faaaaar"
                        },
                        {
                            "id": 6,
                            "text": "faaaaar"
                        },
                        {
                            "id": 6,
                            "text": "faaaaar"
                        },
                        {
                            "id": 3,
                            "text": "some other close answer"
                        }
                    ]
                },
                {
                    "id": 4,
                    "answers": [
                        {
                            "id": 4,
                            "text": "very far answer"
                        },
                        {
                            "id": 5,
                            "text": "wrong answer"
                        },
                        {
                            "id": 6,
                            "text": "faaaaar"
                        },
                        {
                            "id": 6,
                            "text": "faaaaar"
                        },
                        {
                            "id": 3,
                            "text": "some other close answer"
                        },
                        {
                            "id": 4,
                            "text": "far answer"
                        },
                        {
                            "id": 5,
                            "text": "wrong answer"
                        },
                        {
                            "id": 6,
                            "text": "faaaaar"
                        },

                    ]
                },
                {
                    "id": 5,
                    "answers": [
                        {
                            "id": 4,
                            "text": "very far answer"
                        },
                        {
                            "id": 5,
                            "text": "wrong answer"
                        },
                        {
                            "id": 6,
                            "text": "faaaaar"
                        },
                        {
                            "id": 6,
                            "text": "faaaaar"
                        },
                        {
                            "id": 3,
                            "text": "some other close answer"
                        },
                        {
                            "id": 4,
                            "text": "far answer"
                        },

                    ]
                }
            ]
        }

        const results = await get(questionId + '/answers')
        return results
    },

    postQuestion: async function (id, question) {
        return await post("127.0.0.1:8000/api/questions", {code: id, text: question})
    },
    postAnswer: async function (id, answer) {
        return await post("127.0.0.1:8000/api/questions/" + id + "/answers", {text: answer})
    }
    /*
    Example :
    getSomeUrl: async function (someParam) {
        const results = await get('someUrl', {param1: someParam})
        return results
    },
    Usage :
    APIFetcher.getSomeUrl(someParam)
            .then(response => {

            })
            .catch(error => {

            })
    */
}

async function get(url, params) {
    try {
        const results = await API.get(url, {params: params})
        return results.data
    } catch (error) {
        if (error.response.data) {
            throw Error(error.response.data)
        } else {
            return error
        }
    }
}

async function post(url, data) {
    try {
        await API.post(url, data)
    } catch (error) {
        if (error.response.data) {
            throw Error(error.response.data)
        } else {
            return error
        }
    }
}

async function del(url) {
    try {
        await API.delete(url)
    } catch (error) {
        if (error.response.data) {
            throw Error(error.response.data)
        } else {
            return error
        }
    }
}

export default APIFetcher
