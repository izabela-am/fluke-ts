#include <stdio.h>


// a variável c é o símbolo que será usado para desenhar o círculo
// a variável radius é o raio do círculo
void circle(char c,int radius) {
  int i, j;

  for(i =- radius; i < radius; i++) {
    for(j =- radius; j< radius; j++) {
      if(i * i + j * j< radius * radius) {
        printf("%c",c);
      } else {
        printf(" "); 
      }          
    }
    printf("\n");
  }
}

int main() {
    circle('*', 5);
}