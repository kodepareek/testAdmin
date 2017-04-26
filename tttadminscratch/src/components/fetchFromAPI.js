// const fetchFromAPI = (type, resource, params) => {
// 	return fetch('http://localhost:4000/tales/?status=unchecked&stars=5', {
// 		method: 'get', mode: 'no-cors'
// 	})
//   .then((response) => {
//     return response.json()
//   })
// 	.catch(function(err) {
// 	  console.log(err);
// 	});
// } 

// const fetchFromAPI = (type, resource, params) => {
//   fetch('http://localhost:4000/tales/?status=unchecked&stars=5', {
//     method: 'get', mode: 'no-cors'
//   })
//   .then((response) => {
//     return response.json()
//   })
//   .catch(function(err) {
//     console.log(err);
//   });
// }

const data = {
  "meta": {
    "stars": "5",
    "query": {
      "status": "unchecked",
      "stars": "5"
    }
  },
  "data": {
    "tales": [
      {
        "id": "311",
        "format": "short",
        "text": "pulvinar diam donec et lacinia turpis",
        "stars": 1,
        "status": null,
        "writer": {
          "id": "312",
          "name": "Aaron",
          "lastPublished": "2017-03-31T09:18:41.087Z"
        }
      },
      {
        "id": "313",
        "format": "short",
        "text": "lacinia pulvinar justo egestas vitae consectetur",
        "stars": 1,
        "status": null,
        "writer": {
          "id": "314",
          "name": "Grace",
          "lastPublished": "2017-03-31T09:18:41.087Z"
        }
      },
      {
        "id": "315",
        "format": "short",
        "text": "dolor turpis netus senectus netus amet",
        "stars": 1,
        "status": null,
        "writer": {
          "id": "316",
          "name": "Oliver",
          "lastPublished": "2017-03-31T09:18:41.087Z"
        }
      },
      {
        "id": "317",
        "format": "short",
        "text": "neque turpis egestas habitant habitant suspendisse",
        "stars": 1,
        "status": null,
        "writer": {
          "id": "318",
          "name": "Aaron",
          "lastPublished": "2017-03-31T09:18:41.087Z"
        }
      },
      {
        "id": "319",
        "format": "short",
        "text": "aliquet nunc malesuada facilisis scelerisque malesuada",
        "stars": 1,
        "status": null,
        "writer": {
          "id": "320",
          "name": "Charlie",
          "lastPublished": "2017-03-31T09:18:41.087Z"
        }
      },
      {
        "id": "321",
        "format": "short",
        "text": "elit morbi habitant amet diam porttitor",
        "stars": 1,
        "status": null,
        "writer": {
          "id": "322",
          "name": "Charlie",
          "lastPublished": "2017-03-31T09:18:41.087Z"
        }
      },
      {
        "id": "323",
        "format": "short",
        "text": "amet malesuada suspendisse facilisis aliquet aliquet",
        "stars": 1,
        "status": null,
        "writer": {
          "id": "324",
          "name": "Jack",
          "lastPublished": "2017-03-31T09:18:41.087Z"
        }
      }
    ]
  }
}

const fetchFromAPI = (type, resource, params) => {
  new Promise((resolve) => resolve({
  "meta": {
    "stars": "5",
    "query": {
      "status": "unchecked",
      "stars": "5"
    }
  },
  "data": {
    "tales": [
      {
        "id": "311",
        "format": "short",
        "text": "pulvinar diam donec et lacinia turpis",
        "stars": 1,
        "status": null,
        "writer": {
          "id": "312",
          "name": "Aaron",
          "lastPublished": "2017-03-31T09:18:41.087Z"
        }
      },
      {
        "id": "313",
        "format": "short",
        "text": "lacinia pulvinar justo egestas vitae consectetur",
        "stars": 1,
        "status": null,
        "writer": {
          "id": "314",
          "name": "Grace",
          "lastPublished": "2017-03-31T09:18:41.087Z"
        }
      },
      {
        "id": "315",
        "format": "short",
        "text": "dolor turpis netus senectus netus amet",
        "stars": 1,
        "status": null,
        "writer": {
          "id": "316",
          "name": "Oliver",
          "lastPublished": "2017-03-31T09:18:41.087Z"
        }
      },
      {
        "id": "317",
        "format": "short",
        "text": "neque turpis egestas habitant habitant suspendisse",
        "stars": 1,
        "status": null,
        "writer": {
          "id": "318",
          "name": "Aaron",
          "lastPublished": "2017-03-31T09:18:41.087Z"
        }
      },
      {
        "id": "319",
        "format": "short",
        "text": "aliquet nunc malesuada facilisis scelerisque malesuada",
        "stars": 1,
        "status": null,
        "writer": {
          "id": "320",
          "name": "Charlie",
          "lastPublished": "2017-03-31T09:18:41.087Z"
        }
      },
      {
        "id": "321",
        "format": "short",
        "text": "elit morbi habitant amet diam porttitor",
        "stars": 1,
        "status": null,
        "writer": {
          "id": "322",
          "name": "Charlie",
          "lastPublished": "2017-03-31T09:18:41.087Z"
        }
      },
      {
        "id": "323",
        "format": "short",
        "text": "amet malesuada suspendisse facilisis aliquet aliquet",
        "stars": 1,
        "status": null,
        "writer": {
          "id": "324",
          "name": "Jack",
          "lastPublished": "2017-03-31T09:18:41.087Z"
        }
      }
    ]
  }
}
));
}

module.exports = fetchFromAPI;
