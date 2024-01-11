# 课内作业

---

## 一

```c
#include <stdio.h>
int main()
{
    printf("Hello World!\n");
    getchar();
    return 0;
}
```

运行结果

```
Hello World!
```

```c
#include <stdio.h>
int main()
{
    printf("*****\n");

    printf(" *****\n");

    printf("  *****\n");

    getchar();
  
    return 0;
}
```

运行结果

```
*****
 *****
  *****
```

```c
#include <stdio.h>
int max(int a,int b,int c);
int main()
{
    int a,b,c;
    int m;
    scanf("%d %d %d",&a,&b,&c);
    m=max(a,b,c);
    printf("max is %d\n",m);
    return 0;
}
int max(int a,int b,int c)
{
    /*
    int big;
    a > b ?big = a : big =b;
    c > big ? big = c : big = big;
    return big;
    条件表达式错误使用范例
    */

    int big = (a > b) ? a : b;
    big = (c > big) ? c : big;
    return big;
}
```

运行结果

```
8 9 10
max is 10
```

## 三

```c
#include <stdio.h>
double pow(double a, double b)
{
    int ans = 1;
    for (int i = 0; i < b; i++)
    {
        ans *= a;
    }
    return ans;
}
int main()
{
    printf("国民生产总值is%f\n",pow(1+0.07,10));
   
    return 0;
}
```

运行结果

```
国民生产总值is1.967151
```

```c
#include <stdio.h>
#include <math.h>
int main()
{
    char ch;
    double a;
    printf("先生，请选择你的存款方式：\n"
           "a.一次存五年           b.先存2年，到期后连本息再存3年\n"
           "c.先存三年，再本息二年  d.存一年，再本息一年，五次\n"
           "e.活期存款。利息每季度结算一次\n");
    while ((ch = getchar()) != '\n')
    {
        switch (ch)
        {
        case 'a':
        {
            printf("输入您想保存的金额：");
            scanf("%lf", &a);
            printf("您的本息为%lf", a * (1 + 0.03 * 5));
            break;
        }
        case 'b':
        {
            printf("输入您想保存的金额：");
            scanf("%lf", &a);
            printf("您的本息为%lf", a * (1 + 0.021 * 2) * (1 + 0.0275 * 3));
            break;
        }
        case 'c':
        {
            printf("输入您想保存的金额：");
            scanf("%lf", &a);
            printf("您的本息为%lf", a * (1 + 0.0275 * 2) * (1 + 0.021 * 3));
            break; 
        }
        case 'd':
        {
            printf("输入您想保存的金额：");
            scanf("%lf", &a);
            for (int i = 0;  i < 5; i++)
            {
                a *= (1 + 0.015);               /* code */
            }
          
            printf("您的本息为%lf", a);
            break;
        }
        case 'e':
        {
            printf("输入您想保存的金额：");
            scanf("%lf", &a);
            printf("您的本息为%lf", a * (1 + 0.03 / 4));
            break;
        }

        default:
        {
            printf("输错了，再输一次");
            printf("先生，请选择你的存款方式：\n"
                   "a.一次存五年           b.先存2年，到期后连本息再存3年\n"
                   "c.先存三年，再本息二年  d.存一年，再本息一年，五次\n"
                   "e.活期存款。利息每季度结算一次\n");
            break;
        }
        }
    }
    return 0;
}
```

运行结果

```
先生，请选择你的存款方式：
a.一次存五年           b.先存2年，到期后连本息再存3年
c.先存三年，再本息二年  d.存一年，再本息一年，五次
e.活期存款。利息每季度结算一次
a
输入您想保存的金额：10000
您的本息为11500.000000
```

```
先生，请选择你的存款方式：
a.一次存五年           b.先存2年，到期后连本息再存3年
c.先存三年，再本息二年  d.存一年，再本息一年，五次
e.活期存款。利息每季度结算一次
b
输入您想保存的金额：10000
您的本息为11279.650000
```

```
先生，请选择你的存款方式：
a.一次存五年           b.先存2年，到期后连本息再存3年
c.先存三年，再本息二年  d.存一年，再本息一年，五次
e.活期存款。利息每季度结算一次
c
输入您想保存的金额：10000
您的本息为11214.65000
```

```
先生，请选择你的存款方式：
a.一次存五年           b.先存2年，到期后连本息再存3年
c.先存三年，再本息二年  d.存一年，再本息一年，五次
e.活期存款。利息每季度结算一次
d
输入您想保存的金额：10000
您的本息为10772.840039
```

```
先生，请选择你的存款方式：
a.一次存五年           b.先存2年，到期后连本息再存3年
c.先存三年，再本息二年  d.存一年，再本息一年，五次
e.活期存款。利息每季度结算一次
e
输入您想保存的金额：10000
您的本息为10075.000000
```

```c
#include <stdio.h>
#include <math.h>
int main()
{
    double d, p, r;
    d = 300000;
    p = 6000;
    r = 0.01;
    double m = log(p / (p - d * r)) / log(1 + r);
    printf("m=%5.1f\n", m);
    return 0;
}
```

运行结果

```
m= 69.7
```

```c
#include <stdio.h>
int main()
{
    char c1 = 'C',c2 = 'h' ,c3 = 'i',c4 = 'n',c5 = 'a';
    printf("%c%c%c%c%c\n",c1 + 4,c2 + 4,c3 + 4, c4 + 4,c5 + 4);
    return 0;

}
```

运行结果

```
Glmre
```

数组版

```c
/*
#include <stdio.h>
int main()
{
    char MMM['China'];
    char *ptr;
    ptr = MMM;
    for ( int i = 0; i < 5; i++)
    {
        printf("%c",*ptr + 4);

    }
    return 0;
}
错误如下
1.定义数组出错
2.解引指针用错

*/
#include <stdio.h>

int main()
{
    char MMM[] = "China";
    char *ptr = MMM;

    for (int i = 0; i < 5; i++)
    {
        printf("%c", *(ptr + i) + 4);
    }

    return 0;
}

```

运行结果

```
Glmre
```

## 四

```c
#include <stdio.h>
int main()
{
    int a, b, c;
    int max;
    printf("请输入三个整数：");
    while (1)
    {
        if ((scanf("%d %d %d", &a, &b, &c)) != 3)
        {
            printf("输入错误，请重新输入：");
            continue; /* code */
        }
        else
        {
            if (a > b)
                if (a > c)
                {
                    max = a;
                }
                else
                {
                    max = c;
                }
            else
            {
                if (b > c)
                {
                    max = b;
                }
                else
                {
                    max = c;
                }
              
                /* code */
            }
            break;
        }
      
        /* code */
    }
    printf("maxis:%d",max);
    return 0;
}
```

运行结果

```
请输入三个整数：18 19 20
maxis:20
```

```c
#include <stdio.h>
#include <math.h>
int main()
{
    double a;
    scanf("%lf", &a);
    while (a < 0 || a > 1000)
    {
        printf("请重新输入"); /* code */
        scanf("%lf", &a);
    }

    printf("%d", (int)sqrt(a));
    return 0;
}
```

运行结果

```
145
12[1] + Done                       "/usr/bin/gdb" --interpreter=mi --tty=${DbgTerm} 0<"/tmp/Microsoft-MIEngine-In-hosuuzg2.yjp" 1>"/tmp/Microsoft-MIEngine-Out-jgt50ewe.wv0"
```

```c
#include <stab.h>
int main()
{
    double a;
    scanf("%lf",&a);
    if (a < 1)
    {
        printf("%lf",a);
        /* code */
    }
    if (a >= 1 && a < 10)
    {
        printf("%lf",2*a-1);
        /* code */
    }
    else
    {
        printf("%lf",3*a-11);
    }
    return 0;
  

}
```

运行结果

```
8
15.000000
```

```c
#include <stdio.h>
int main()
{
    int a;
    scanf("%d",&a);
    if (a > 90)
    {
       putchar('A');
        /* code */
    }
    else if (a > 80)
    {
        putchar('B');
        /* code */
    }
    else if (a > 70)
    {
        putchar('C');
        /* code */
    }
    else if (a > 60)
    {
        putchar('D');
        /* code */
    }
    else
    {
        putchar('E');
    }
    return 0;
  

}
```

运行结果

```
67
D[1] + Done                       "/usr/bin/gdb" --interpreter=mi --tty=${DbgTerm} 0<"/tmp/Microsoft-MIEngine-In-pqimd5vz.gq5" 1>"/tmp/Microsoft-MIEngine-Out-bczd1xq3.1ew"
```

* 使用递归函数

```c
/*
#include <stdio.h>
int pow(int a, int b);
void ddyin(int a, int i);
int nixu(int a, int i);

int main()
{
    int a, b, i, j;
    scanf("%d", &a);

    for (i = 0; (a / (pow(10, i))) != 0; i++)
        ;
    printf("有%d位\n", i);
    ddyin(a, i);
    printf("逆序为%d\n", nixu(a, i));
}
void ddyin(int a, int i)
{

    a = a / 10;
    if (a > 10)
    {
        i--;
        ddyin(a, i);
    }
    printf("第%d位是%d\n", i, a / pow(10, i - 1));
}
int nixu(int a, int i)
{
    int k, sum = 0;
    for (int j = 0; j < i; j++)
    {

        k = a % 10;
        sum = 10 * sum + k;
        a = a / 10;
     
    }
    return sum;
}
int pow(int a, int b)
{
    int ans = 1;
    for (int i = 0; i < b; i++)
    {
        ans *= a;
    }
    return ans;
} */
#include <stdio.h>
int pow(int a, int b);
void ddyin(int a, int i);
int nixu(int a);

int main()
{
    int num, digits;
    scanf("%d", &num);

    for (digits = 0; (num / pow(10, digits)) != 0; digits++);
    printf("有%d位\n", digits);
    ddyin(num, digits);
    printf("逆序为%d\n", nixu(num));
    return 0;
}

void ddyin(int a, int i)
{
    i--;
    if (a > 10)
        ddyin(a / 10, i);
    printf("第%d位是%d\n", i + 1, a % 10);
}

int nixu(int a)
{
    int k, sum = 0;
    while (a > 0)
    {
        k = a % 10;
        sum = 10 * sum + k;
        a = a / 10;
    }
    return sum;
}

int pow(int a, int b)
{
    int ans = 1;
    for (int i = 0; i < b; i++)
    {
        ans *= a;
    }
    return ans;
}
```

运行结果

```
123
有3位
第1位是1
第2位是2
第3位是3
逆序为321
```

* 正常做

```c
#include <stdio.h>
#include <math.h>
int main()
{
    int a,b;
    scanf("%d", &a);
    int sum = 0;
    int count = 0;
    int j;
    for ( j = 0; (a/(int)pow(10,j))!=0; j++)
    ;
    printf("有%d位\n",j);
    for (int i = 0;i < j; i++)
    {
        b = a % 10;
        sum = sum*10 + b;
        a = a / 10;
        printf("第%d位是%d\n",i+1,b);
    }
    printf("逆序为%d\n",sum);
    return 0;
}
```

运行结果

```
123
有3位
第1位是3
第2位是2
第3位是1
逆序为321
```

注意到：

> for ( j = 0; (a/(int)pow(10,j))!=0; j++)
> 因为math.h里的pow函数是double类型的，所以需要强制类型转换（int）

* 使用字符数组

```c
#include <stdio.h>
/* void s_gets(char *st, int n); */
int main()
{
    char a[10];
    int i;
    scanf("%s", a);
    for (i = 0; i < 100; i++)
    {
        if (a[i] == '\0')
        {
            break; /* code */
        }
    }
    printf("有%d位\n", i);
    for (int j = 0; j < i; j++)
    {
        printf("第%d位是%c\n", j + 1, a[j]);
    }
    printf("逆序为：\n");
    for (int j = 0; j < i; j++)
    {

        printf("%c", a[i - j - 1]);
    }
    return 0;
}
/* void s_gets(char *st,int n) */
/* {
    char *ret_val;
    int i = 0;
    ret_val = fgets(st, n, stdin);
    if (ret_val)
    {
        while (st[i] != '\n' && st[i] != '\0')
            i++;
        if (st[i] == '\n')
            st[i] = '\0';
        else
            while (getchar() != '\n')
                continue;
    }
} */
```

运行结果

```
有3位
第1位是1
第2位是2
第3位是3
逆序为：
321
```

* 动态数组
  出现的问题：1. realloc函数第一个首字符必须指向开头
  2. scanf函数的特性 读取到\n时会等待下一个输入，回车无法

```c
#include <stdio.h>
#include <stdlib.h>
int main()
{
    int *ptr;
    int size;
    int j = 0;
    printf("请输入你想输入的大概字数：");
    scanf("%d", &size);
    int n;
    ptr = (int *)malloc(size * sizeof(int));
    if (ptr == NULL)
    {
        printf("内存分配失败");
        exit(1);
    }
    printf("请输入你想输入的数字，以q结束：");
    while (scanf("%d", &n) == 1)
    {
        *ptr = n;
        ptr++;
        j++;
        if (j == size)
        {
            size += 2;
            int *temp = ptr;
            ptr -= j;
            ptr = (int *)realloc(ptr, size * sizeof(int));
            ptr = temp;
            if (ptr == NULL)
            {
                printf("内存分配失败");
                exit(1);
            }
        }
    }
    ptr -= j;
    for (int i = 0; i < j; i++)
    {
        for (int k = 0; k < j - i -1; k++)
        {
            if (ptr[k] > ptr[k + 1])
            {
                int temp = ptr[k];
                ptr[k] = ptr[k + 1];
                ptr[k + 1] = temp;
            }
        }
    }
    printf("由小到大：\n");
    for (int i = 0; i < j; i++)
    {
        printf("%d ", ptr[i]);
    }
    printf("\n");
    printf("由大到小：\n");
    for (int i = j - 1; i >= 0; i--)
    {
        printf("%d ", ptr[i]);
    }
    printf("\n");
    free(ptr);
    return 0;
}
```

运行结果

```
请输入你想输入的大概字数：12 12 32 34 48 98 67 98 43 23 43 23 23 q
请输入你想输入的数字，以q结束：由小到大：
12 23 23 23 32 34 43 43 48 67 98 98 
由大到小：
98 98 67 48 43 43 34 32 23 23 23 12 
```

# 课外作业

主要来自cprimer plus
详情见
https://gitee.com/qiegewalalalala/qiegewala
