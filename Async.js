console.log('Person 1: Shows Tickets');
console.log('Person 2: Shows Tickets');

const preMovie = async () => {
    const promiseWifeBringingTickets = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket');
        }, 3000);
    });
    const getPopcorn = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('popcorn');
        }, 1000);
    });
    const addButter = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('butter');
        }, 1000);
    });
    const getColdDrinks = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('colddrinks');
        }, 1000);
    });

    let ticket = await promiseWifeBringingTickets;

    console.log(`wife: I have the ${ticket}`);
    console.log('husband: We should go in.');
    console.log('wife: No, I am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband: I got some ${popcorn}`);
    console.log('husband: We should go in');
    console.log('wife: I need butter on my popcorn');

    let butter = await addButter;

    console.log(`husband: I got some ${butter} on popcorn`);
    console.log('husband: Anything else, darling?');

    let colddrinks = await getColdDrinks;

    console.log(`wife: I am bringing ${colddrinks}`);
    console.log('wife: Lets go, we are getting late');
    console.log('husband: Thank you for the reminder *grins*');

    [popcorn, colddrinks] = await Promise.all([getPopcorn, getColdDrinks]);

    return ticket;
};

preMovie().then((m) => console.log(`Person 3: Shows ${m}`));

console.log('Person 4: Shows Tickets');
console.log('Person 5: Shows Tickets');
