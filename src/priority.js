import firebase from "firebase/compat/app";

const PRODUCTS_DATA = [
    {
        name: 'Simple Bread', 
        priority: 50, 
        clicked: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    },
    {
        name: "Garlic Bread", 
        priority: 75, 
        clicked: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    },
    {
        name: 'Chicken',
        priority: 100,
        clicked: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    },
    {
        name: 'Paneer',
        priority: 150, 
        clicked: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    },
    {
        name: 'Dahi',
        priority: 200, 
        clicked: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    },
    {
        name: 'Eggs',
        priority: 250, 
        clicked: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    },
    {
        name: 'Milk', 
        priority: 300, 
        clicked: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    }, 
    {
        name: 'Hashbrown',
        priority: 325, 
        clicked: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    },
    {
        name: 'Matar',
        priority: 340, 
        clicked: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    },
    {
        name: 'Surf',
        priority: 350, 
        clicked: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    },
    {
        name: 'Aluminium foil',
        priority: 365, 
        clicked: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    },
    {
        name: 'Shelf Spray',
        priority: 375, 
        clicked: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    },
    {
        name: 'Towel Paper',
        priority: 400, 
        clicked: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    },
    {
        name: 'Toilet Paper',
        priority: 450, 
        clicked: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    },
    {
        name: 'Peanut Butter',
        priority: 500, 
        clicked: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    },
    {
        name: 'Rice',
        priority: 525, 
        clicked: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    },  
    {
        name: 'Atta',
        priority: 550, 
        clicked: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    },
    {
        name: "Biscuit",
        priority: 600, 
        clicked: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    },
    {
        name: "Gheo",
        priority: 650, 
        clicked: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    },
    {
        name: "Masala",
        priority: 700, 
        clicked: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    },
    {
        name: "Jira", 
        priority: 750, 
        clicked: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    },
    {
        name: "Onions",
        priority: 775, 
        clicked: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    },
    {
        name: "Potatoes",
        priority: 800, 
        clicked: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    },
    {
        name: "Banana",
        priority: 850, 
        clicked: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    },
    {
        name: "Apples",
        priority: 900, 
        clicked: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    },
    {
        name: "Sabzi", 
        priority: 925, 
        clicked: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    },      
    {
        name: "Oranges",
        priority: 950, 
        clicked: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    },
    {
        name: "Kiwi",
        priority: 1000, 
        clicked: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    }
]

export default PRODUCTS_DATA;