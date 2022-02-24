import axios from "axios";
import { DbService } from "./db-service";
import { Utils } from "./utilService";

export const userService = {
    query,
    remove,
    getById,
    save
}

const KEY = 'users';

async function query(filterBy, filterName) {
    var users = await DbService.query(KEY);
    if (!users || !users.length) {
        users = await _usersQuery()
        for (let i = 0; i < users.length; i++) {
            const user = { ...users[i] }
            user.isValidTitleName = true
            user.isValidFirstName = true
            user.isValidLastName = true
            user.isValidEmail = true
            user.isValidLocationCountry = true
            user.isValidLocationCity = true
            user.isValidStreetName = true
            user.isValidStreetNumber = true
            users[i] = user
        }
        await DbService.insert(KEY, users);
    }
    if (!filterBy) {
        return users;
    } else {
        const regex = new RegExp(filterBy, "i");
        const usersForDisplay = users.filter((user) => {
            return filterName === 'name' ? (regex.test(user.name.first)) : (regex.test(user.email))
        });
        return usersForDisplay;
    }
}


async function _usersQuery() {
    try {
        const baseUrl = `https://randomuser.me/api/?results=20`;
        var res = await axios.get(baseUrl)
        return res.data.results
    } catch (err) {
        console.log('UserService : Could not get users from URL ', err);
        throw err
    }
}


function remove(bookId) {
    return DbService.remove(KEY, bookId);
}


function getById(userId) {
    return DbService.get(KEY, userId);
}


function save(user) {
    if (user._id) {
        return DbService.put(KEY, user);
    } else {
        const userToSave = {
            _id: Utils.getRandomId(),
            isValidEmail: true,
            isValidFirstName: true,
            isValidLastName: true,
            isValidLocationCity: true,
            isValidLocationCountry: true,
            isValidStreetName: true,
            isValidStreetNumber: true,
            isValidTitleName: true,
            email: user.email,
            location: {
                city: user.city,
                country: user.country,
                street: {
                    name: user.streetName,
                    number: user.streetNumber
                }
            },
            name: {
                first: user.first,
                last: user.last,
                title: user.title
            },
            picture: {
                large: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
            }
        }
        return DbService.post(KEY, userToSave)
    }
}



