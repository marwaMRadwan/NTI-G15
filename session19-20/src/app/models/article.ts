export interface Article {
    "id": number
    "title": string
    "content": string
    "cat_id": string
    "image": string
    "created_at": string
    "reactions_count": string
    "department_data": {
      "id": number
      "dep_name": string
    }
    "reactions": [
      {
        "id": number
        "article_id": string
        "user_id": string
        "user": {
          "id": number
          "name": string
          "image": string|null
        }
      }
    ]
    "comments": [
      {
        "id":number
        "article_id": string
        "user_id": string
        "comment": string
        "created_at": string
        "user": {
          "id": number
          "name": string
          "image": string|null
        }
      }
    ]
}
