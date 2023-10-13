const dishesAndCookers = new Map;
dishesAndCookers.set('Пицца "Маргарита"', 'повар: Виктор')
    .set('Пицца "Пепперони"', 'повар: Виктор')
    .set('Суши "Филадельфия"', 'повар: Ольга')
    .set('Суши "Калифорния"', 'повар: Ольга')
    .set('Десерт "Тирамису"', 'повар: Дмитрий')
    .set('Десерт "Чизкейк"', 'повар: Дмитрий');

console.log(dishesAndCookers);

const restaurantModel = {
    listOfOrders: new Map(),
    cookers: dishesAndCookers,
    executors: [],
};

console.log(restaurantModel);

const restaurantView = {
    addToList() {
        menu.addEventListener('click', (e) => {
            const li = `<li class="goods-in-chart">${e.target.dataset.id}</li>`;
            clientChoice.insertAdjacentHTML('beforeend', li);
        });
    },
    sendOrder() {
        order.addEventListener('click', function () {
            const client = { name: clientName.value };
            const choice = [];

            const item = Array.from(clientChoice.children);
            item.forEach((product) => {
                choice.push(product.textContent);
            });
            restaurantController.makeOrder(client, choice);
            clientName.value = '';
            let goodsBox = document.querySelectorAll('.goods-in-chart');
            goodsBox.forEach((child) => { child.remove() });
        })
    },
    showExecutor(array) {
        const executors = [];
        array.forEach((product) => {
            executors.push(dishesAndCookers.get(product));
        })
        return executors;
    },
    showOrders() {
        let box = document.querySelector('#orderBox');
        box.lastElementChild.remove();
        const ul = document.createElement('ul');
        for (let order of restaurantModel.listOfOrders) {
            const li = document.createElement('li');
            li.textContent = `Клиент: ${order[0].name} заказал(а): ${order[1]} Исполнители: ${this.showExecutor(order[1])}`;
            ul.append(li);
        }
        orderBox.append(ul);
    },
    generateOrder(client, choice) {
        client.orderId = listOfOrders.size() + 1;
        listOfOrders.set(client, choice);
    }
};

restaurantView.addToList();
restaurantView.sendOrder();

const restaurantController = {
    restaurant: restaurantModel,
    makeOrder(client, choice) {
        restaurantModel.listOfOrders.set(client, choice);
        restaurantView.showOrders();
    }
}