
import NotificationService , {NOTIF_WISHLIST_CHANGED} from './notification';

let ns = new NotificationService();

let instance = null;

var wishList = [];

class DataService {

    constructor() {

        if(!instance){
            instance = this;
        }

        return this;
          
    }

    addWishListItem = item => {
        wishList.push(item);

        ns.postNotificationService(NOTIF_WISHLIST_CHANGED,wishList);
    }

    removeWishListItem = item => {

        for (var x = 0 ; x < wishList.length; x++)
         {
             if(wishList[x]._id === item._id) {
                 wishList.splice(x,1);
                 ns.postNotificationService(NOTIF_WISHLIST_CHANGED,wishList);
                 break;
             }
         }
    }

    itemOnWishList = item => {

        for(var x = 0; x<wishList.length;x++)
         {
             if(wishList[x]._id === item._id) {
                 return true;
             }
         }

         return false;
    }
}

export default DataService;