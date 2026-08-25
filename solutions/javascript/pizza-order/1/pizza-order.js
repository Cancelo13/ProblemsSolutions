export class PizzaOrder{
    constructor(pizza, ...extras){
        this.pizza = pizza;
        this.extras = extras;
    }
}

export function pizzaPrice(pizza, ...extra){
    let tot = 0;
    if(pizza == 'Margherita'){
            tot += 7;
        }
        else if(pizza == 'Caprese'){
            tot += 9;
        }
        else if(pizza == 'Formaggio'){
            tot += 10;
    }
    for(let i = 0 ; i < extra.length; i++){
        if(extra[i] == 'ExtraToppings'){
            tot += 2;
        }
        else if(extra[i] == 'ExtraSauce'){
            tot += 1;
        }
    }
    return tot;
}
export function orderPrice(pizzas){
    let tot = 0;
    for(let i = 0 ; i < pizzas.length; i++){
        tot += pizzaPrice(pizzas[i].pizza, ...pizzas[i].extras);
    }
    return tot;
}