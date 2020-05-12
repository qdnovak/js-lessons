class SimpleMember {
  constructor(name) {
    this.name = name;
    this.cost = 50;
  }
}
class StandartMember {
  constructor(name) {
    this.name = name;
    this.cost = 150;
  }
}
class GoldMember {
  constructor(name) {
    this.name = name;
    this.cost = 250;
  }
}

class MemberFactory {
  static list = {
    simple: SimpleMember,
    standart: StandartMember,
    gold: GoldMember
  };

  create(name, type = "simple") {
    const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
    const member = new Membership(name);

    member.type = type;
    member.difine = function() {
      console.log(this.name + " " + this.cost);
    };
    return member;
  }
}
const factory = new MemberFactory();

const member = [
  factory.create("vlas"),
  factory.create("Vasya", "gold"),
  factory.create("Jasia", "standart")
];

member.forEach(m => {
  m.difine();
});
