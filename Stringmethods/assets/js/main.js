// 1. a, b və c ədədlərimiz var. ax^2+bx+c=0 kvadrat tənliyinin həllini tapıb konsolda çap edin.

// let root1, root2;
// let a=6;
// let b=8;
// let c=4;
// let Discriminant = b * b - 4 * a * c;
// if (Discriminant>0) {
// let root1 = (-b + Math.sqrt(Discriminant)) / (2*a);
// let root2 = (-b - Math.sqrt(Discriminant)) / (2*a);
// console.log(root1);
// console.log(root2);
// };
// if (Discriminant==0) {
//     let root = -b / (2*a);
//     console.log(root);
// } else {
//     console.log("kokler 0-dan kicikdir");
// };

// 2. a ədədimiz var. 1-dən 1000-ə qədər A-ya bölünən bütün ədədləri çap edin.

// let A = 8; 

// for (let i = 1; i <= 1000; i++) {
//     if (i % A === 0) {
//         console.log(i);
//     }
// }

// 3. Bu massivin minimum elementini tapın: 

// const arr = [2, 4, 5, 9, 1];
// let minElement = Math.min(...arr);
// console.log("min element:", minElement);

// 4. Bu massivin maksimum elementini tapın

// const arr = [2, 4, 5, 9, 1];
// let maxElement = Math.max(...arr);
// console.log("max element:", maxElement);

// 5. Bu massivin minimum elementinin indeksini tapın.
// const arr = [2, 4, 5, 9, 1];
// const min = Math.min(...arr);
// const index = arr.indexOf(min);
// console.log("arrayin min element indexi:",index);

// 6. Bu massivin maksimum elementinin indeksini tapın.
// const arr = [2, 4, 5, 9, 1];
// const max = Math.max(...arr);
// const index = arr.indexOf(max);
// console.log("arrayin max element indexi:",index);

// 7.Tək indeksli massiv elementlərinin cəmini hesablayın

// const arr = [2, 4, 5, 9, 1];
// let sum = 0;

// for (let i = 1; i < arr.length; i+=2) {
//     sum += arr[i];
// }
// console.log("toplami:",sum);

// 8.Mən Code Academy Tələbəsiyəm. cümlədəki hərfləri kiçik hərfə çevirin.

// let text = "Mən Code Academy Tələbəsiyəm.";
// let result = text.toLowerCase();
// console.log(result);



// 9. Mətndə başlanğıc və son boşluqları təmizləyin: "            Mən Code Academydə Programing tədrisi alıram            "

// let text = "            Mən Code Academydə Programing tədrisi alıram            ";
// let result = text.trim();
// console.log(result);

// 10. Mən Code Academy Tələbəsiyəm. cümləsini sözlərə ayırın

// let text = "Mən Code Academy Tələbəsiyəm";
// const myArray = text.split(" ");
// console.log(myArray);

// 11.  "            Mən Code Academydə Programing tədrisi alıram            " cümləsində neçə hərf olduğunu consolda yazdırın.

// let text = "            Mən Code Academydə Programing tədrisi alıram            " ;
// let withoutspace = text.trim();
// let herfSayı = withoutspace.replaceAll(' ','').length;
// console.log(herfSayı);



  