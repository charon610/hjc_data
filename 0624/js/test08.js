// 객체-1
const family = {
    'address' : 'seoul',
    member:{},
    addFamily: function(age, name, role){
        this.member[role] = {
            age:age,
            name:name
        };
    },
    getHeadcount : function(){
        return Object.keys(this.members).length;
    }
};

family.addFamily(30, 'chloe', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(10, 'dangdangi', 'dog');
console.log(family.getHeadcount());