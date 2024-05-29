# OpenAI_VectorDB_Embedding

Embedding are numerical representation that capture the essential features and realtionship of discret object like words/documents, in a continuoius vector space

Semantic Search: Text embeddings can be used to represent both the user's query and the universe of documents in a high-dimensional vector space. Documents that are more semantically similar to the user's query will have a shorter distance in the vector space, and can be ranked higher in the search results.

Object(Image/Text etc..) -> Embedding Model -> Vector space

Embedding Models(Ranking-https://huggingface.co/spaces/mteb/leaderboard):
(OpenSource)OpenAI: text-embedding-ada-002
(OpenSource)Google : tensorflow

Basic Model/Techniques:
TF-IDF(Term Frequency Inverse Document Frequency - of records): It can be defined as the calculation of how relevant a word in a series or corpus is to a text.
Bag of Words (BoW): algorithm that counts how many times a word appears in a document.
Word2Vec(neural network-based technique): learns continuous word embeddings, capturing the semantic relationships between words. It overcomes the limitations of BoW and TF-IDF by preserving contextual information and representing words in a dense vector space.

Vetor Database:
Faiss (Facebook AI Similarity Search): Developed by Facebook's AI Research lab, Faiss is a library for efficient similarity search and clustering of dense vectors.

Annoy (Approximate Nearest Neighbors Oh Yeah): Developed by Spotify, Annoy is a C++ library with Python bindings to search for points in space that are close to a given query point. It also creates large read-only file-based data structures that are mmapped into memory.

Milvus: An open-source vector database built for AI applications, which can handle massive-scale vector data and provide near real-time search.

NMSLIB (Non-Metric Space Library): An efficient cross-platform similarity search library and a toolkit for evaluation of k-NN methods for generic non-metric spaces.

SPTAG (Space Partition Tree And Graph): A library developed by Microsoft Research to provide the ability to add fast approximate nearest neighbor search capabilities to applications.

Pinecone: A managed vector database service that makes it easy to add recommendation, personalization, and search capabilities to applications.

## Elasticsearch: While not a dedicated vector database, Elasticsearch has vector search capabilities and can be used as a vector database in certain use cases.

Text Embedding:
https://platform.openai.com/docs/guides/embeddings

OpenAI API Key:
https://platform.openai.com/settings/profile?tab=api-keys

API Reference:
https://platform.openai.com/docs/api-reference/embeddings/create
