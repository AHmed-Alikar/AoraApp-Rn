// import { router } from 'expo-router';
// import { Client, Account, ID, Avatars, Databases, Storage, Query } from 'react-native-appwrite';


// export const appWrite = {
//     endpoint: "https://cloud.appwrite.io/v1",
//     platform: "com.ak.aora",
//     projectId: "66326ba50038f2e532cf",
//     databaseId: "66326f780019d3dff2e9",
//     userCollectionId: "66326fb300091db8460e",
//     videoColletionId: "66326ff0001863d5f009",
//     storageId: "66327257000d38e76f76"

// }
// // Init your Web SDK
// const client = new Client();

// client
//     .setEndpoint(appWrite.endpoint) // Your Appwrite Endpoint
//     .setProject(appWrite.projectId)
//     .setPlatform(appWrite.platform) // YOUR application ID


// const account = new Account(client);
// const avatars = new Avatars(client);
// const databases = new Databases(client);
// // const storage = new Storage(client);

// export const createUser = async (email, password, username) => {
//     try {
//         const newAccount = await account.create(ID.unique(), email, password, username);
//         if (!newAccount) throw new Error("Failed to create account");

//         return newAccount;
//     } catch (error) {
//         console.log(error);
//         throw new Error(error);
//     }
// };


// // Register User


// export const signIn = async (email, password) => {
//     try {
//         const currentSession = account.getSession();
//         //console.log("currentSession:", currentSession);
//         if (currentSession) {
//             //  console.log("Session already active:", currentSession);
//             account.deleteSession();
//             //router.replace("/home");

//         }

//         const session = await account.createEmailSession(email, password);
//         //console.log("Session created:", session);
//         return session;
//     } catch (error) {
//         console.log(error);
//         throw new Error(error);
//     }
// };

// export async function getCurrentUser() {
//     try {
//         const currentAccount = await account.get();
//         if (!currentAccount) throw Error;

//         const currentUser = await databases.listDocuments(
//             appWrite.databaseId,
//             appWrite.userCollectionId,
//             [Query.equal("accountId", currentAccount.$id)]
//         );

//         if (!currentUser) throw Error;

//         return currentUser.documents[0];
//     } catch (error) {
//         console.log(error);
//         return null;
//     }
// }

// export const getAllPost = async () => {
//     try {
//         const posts = await databases.listDocuments(
//             appWrite.databaseId,
//             appWrite.videoColletionId,
//         )
//         return posts.documents;

//     } catch (error) {
//         console.log(error)

//     }
// }

// // export const getLatestPost = async () => {
// //     try {
// //         const posts = await databases.listDocuments(
// //             appWrite.databaseId,
// //             appWrite.videoColletionId,
// //             [Query.orderDesc('$createdAt', posts[7])]
// //         )
// //         return posts.documents;

// //     } catch (error) {
// //         console.log(error)

// //     }
// // }
// export async function getLatestPosts() {
//     try {
//         const posts = await databases.listDocuments(
//             appWrite.databaseId,
//             appWrite.videoColletionId,
//             [Query.orderDesc("$createdAt"), Query.limit(7)]
//         );

//         return posts.documents;
//     } catch (error) {
//         throw new Error(error);
//     }
// }
import { router } from 'expo-router';
import { Client, Account, ID, Avatars, Databases, Storage, Query } from 'react-native-appwrite';


export const appWrite = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.ak.aora",
    projectId: "66326ba50038f2e532cf",
    databaseId: "66326f780019d3dff2e9",
    userCollectionId: "66326fb300091db8460e",
    videoColletionId: "66326ff0001863d5f009",
    storageId: "66327257000d38e76f76"

}
// Init your Web SDK
const client = new Client();

client
    .setEndpoint(appWrite.endpoint) // Your Appwrite Endpoint
    .setProject(appWrite.projectId)
    .setPlatform(appWrite.platform) // YOUR application ID


const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);
// const storage = new Storage(client);

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(ID.unique(), email, password, username);
        if (!newAccount) throw new Error("Failed to create account");

        return newAccount;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};


// Register User


export const signIn = async (email, password) => {
    try {
        const currentSession = account.getSession();
        //console.log("currentSession:", currentSession);
        if (currentSession) {
            //  console.log("Session already active:", currentSession);
            account.deleteSession();
            //router.replace("/home");

        }

        const session = await account.createEmailSession(email, password);
        //console.log("Session created:", session);
        return session;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

export async function getCurrentUser() {
    try {
        const currentAccount = await account.get();
        if (!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            appWrite.databaseId,
            appWrite.userCollectionId,
            [Query.equal("accountId", currentAccount.$id)]
        );

        if (!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const getAllPost = async () => {
    try {
        const posts = await databases.listDocuments(
            appWrite.databaseId,
            appWrite.videoColletionId,
        )
        return posts.documents;

    } catch (error) {
        console.log(error)

    }
}

export const getLatestPost = async () => {
    try {
        const posts = await databases.listDocuments(
            appWrite.databaseId,
            appWrite.videoColletionId,
            [Query.orderDesc('$createdAt', posts[7])]
        )
        return posts.documents;

    } catch (error) {
        console.log(error)

    }
}

export async function getLatestPosts() {
    try {
        const posts = await databases.listDocuments(
            appWrite.databaseId,
            appWrite.videoColletionId,
            [Query.orderDesc("$createdAt"), Query.limit(7)]
        );

        return posts.documents;
    } catch (error) {
        throw new Error(error);
    }
}
export async function getUserPost(userId) {
    try {
        const posts = await databases.listDocuments(
            appWrite.databaseId,
            appWrite.videoColletionId,
            [Query.equal("creator"), userId]
        );

        return posts.documents;
    } catch (error) {
        throw new Error(error);
    }
}
export async function searchPost(query) {
    try {
        const posts = await databases.listDocuments(
            appWrite.databaseId,
            appWrite.videoColletionId,
            [Query.orderDesc("title"), query]
        );

        return posts.documents;
    } catch (error) {
        throw new Error(error);
    }
}

export const singOut = async () => {
    try {
        const session = await account.deleteSession("current");
        return session

    } catch (error) {
        throw new Error(error);
        console.log(error)

    }
}
