name = ['mamun', 'rahim', 'karim', 'sorif', 'barkatullah', 'rony', 'pori', 'piu', 'sohan', 'sabina']
var smallest = name[0];

for (var i = 1; i < name.length; i++) {
if (name[i] > smallest) {
    smallest = name[i];
  }
}
console.log(smallest);