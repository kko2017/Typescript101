**Mapped Type**

`Mapped Type` is a object type that maps a type representing property names over a property declaration tmeplate. In other words, You can transforms old types into new ones using `Mapped Type`. 

``` typescript
{ [ P in K ] : T }
{ [ P in K ] ? : T }
{ readonly [ P in K ] : T }
{ readonly [ P in K ] ? : T }
```

+ [First Introduction of mapped type of TypeScript by Microsoft](https://github.com/Microsoft/TypeScript/pull/12114)