import { ref } from 'vue';

  export const useProduct = () => {
    const products = ref([]);
  
    const fetchProducts = async () => {
        const productsData = JSON.parse(localStorage.getItem('products'));
        if (products.value.length === 0) {    
            products.value  = productsData;
            return;
        }
     try {
        const { data } = await useFetch('https://fakestoreapi.com/products');
        console.log(data.value)
        products.value = data.value;
        localStorage.setItem('products', JSON.stringify( products.value))

      } catch (error) {
        console.log('Error fetching products:', error);
      }
    };
  
    return {
      products,
      fetchProducts,
    };
  };

interface User{
    name: string,
    password: string
}

// 定义一个 composable，用于管理用户集合
export const useUsers = () => {
    // 使用 useState 钩子初始化用户集合
    const Users = ref<User[]>([]);
    const addUser = (user: User) => {
        Users.value.push({ ...user });
        localStorage.setItem('users', JSON.stringify(Users.value))
    };

    const validateUser = (username: string, password: string): boolean => {
     
        const usersData = localStorage.getItem('users');
        const UsersArray = usersData ? JSON.parse(usersData) : [];
        return UsersArray.some(user => user.username === username && user.password === password);
    };
    return {
        Users,
        addUser,
        validateUser
    };
};
 
const enduring: { [key: string]: () => Ref<any> } = {
    useProduct, useUsers
}


export const setLocal = (key?: string) => {
    if (key) {
        const useKey = 'use' + key.slice(0, 1).toUpperCase() + key.slice(1).toLowerCase();
        const func = enduring[useKey]
        if (!func) {
            console.log('cannot find the useKey: ', useKey);
            return
        }
        localStorage.setItem(key, JSON.stringify(func().value))
    } else {
        console.log("store all the data ")
        for (const key in enduring) {
            if (Object.prototype.hasOwnProperty.call(enduring, key)) {
                const element = enduring[key];
                const setKey = key.toLowerCase().substring(3)
                try {
                    localStorage.setItem(setKey, JSON.stringify(element().value))
                } catch (error) {
                    console.log( error);
                }
            }
        }
    }
}

export const getLoacl = () => {
    for (const key in enduring) {
        if (Object.prototype.hasOwnProperty.call(enduring, key)) {
            const element = enduring[key];
            const setKey = key.toLowerCase().substring(3)
            try {
                const localData = localStorage.getItem(setKey) || ''
                if (localData) {
                    element().value = JSON.parse(localData)
                    console.log(setKey, '的本地存储数据获取成功', element().value);
                }
            } catch (error) {
                console.log(`在获取${setKey}的数据时出现错误`, error);
            }
        }
    }
}