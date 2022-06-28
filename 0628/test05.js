// 클래스에서 정적 메소드 - static
// static - 지역변수이면서 전역변수
// 전역변수처럼 프로그램 종료시까지 존재하여 값을 기억하고 있음.

class product{
    static build(name, price){
        const id = Math.floor(Math.random()*1000);
        return new product(id, name, price);
    }
    static getTaxPrice(product){
        return(product.price*0.1) + product.price;
    }

    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class DeposableProduct extends product{
    depose(){
        this.depose = true;
    }
}

const gum = product.build('껌', 1000);
console.log(gum);

const clothes = new DeposableProduct(1, '옷', 2000);
const taxPrice = DeposableProduct.getTaxPrice(clothes);
console.log(taxPrice);
