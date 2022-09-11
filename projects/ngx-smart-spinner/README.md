# Smart spinner Angular library

Library provide manage spinners on your application without unnecessary manual work, such as:

```
	this.isLoading = true;
    
```

## Demo page

https://arioshaman.github.io/ngx-smart-spinner/

## how implement solution

##### Step 1 Install package
```
npm install ngx-smart-spinner
```

##### Step 2 import module

```
imports: [
	NgxSmartSpinnerModule.forRoot()
]
```

If don't want to use default spinner you can provide your own spinner:

```
const ngxSmartSpinnerCont: INgxSmartSpinnerModuleConfig = {
  spinnerUrl: '../assets/icons/spinner.svg',
  spinnerSize: 50,
};

...
imports: [
	NgxSmartSpinnerModule.forRoot(ngxSmartSpinnerCont)
]
```

spinnerUrl - can be path to your local file or url to your file.
spinnerSize - you should additionaly provide default size of spinner in px

Additionally: You can change the icon usage by substituting the desired image (icon) into the component itself (example on step 3)

##### Step 3 Component usage

```
 <ngx-smart-spinner
      id="SOME_ID_FOR_YOUR_SPINNER"
 ></ngx-smart-spinner>
```

for id you can use any string to identify your spinner (you can use uuid - at your choice)

If you will use the same id on different component - it's not a problem the library call both spinners.

Okey. We added a spinner to the page, what next?

Next you need connect your spinner with http request, it's making simply just modify your headers on request:

```
  public getList(spinnerId: string): Observable<any> {
    const url = '/some/url';
    const headers = new HttpHeaders({
      spinnerId,
    });

    return this._http.get(url, { headers });
  }
```

The package automatically handle the needed header and will remove ```spinnerId``` before request will called.


## How pass different spinner asset?
#### First way 

Firstly you can provide different images provide module on different places. For example:

Module 1:
```
const ngxSmartSpinnerCont: INgxSmartSpinnerModuleConfig = {
  spinnerUrl: '../assets/icons/spinner-01.svg',
  spinnerSize: 50,
};

...
imports: [
	NgxSmartSpinnerModule.forRoot(ngxSmartSpinnerCont)
]
```

Module 2:
```
const ngxSmartSpinnerCont: INgxSmartSpinnerModuleConfig = {
  spinnerUrl: '../assets/icons/spinner-02.svg',
  spinnerSize: 100,
};

...
imports: [
	NgxSmartSpinnerModule.forRoot(ngxSmartSpinnerCont)
]
```
#### Second way
You can change the spinner asset just putted it on component:
```
<ngx-smart-spinner
	id="secondSpinnerId"
>
	<img src="../assets/icons/spinner-2.svg">
</ngx-smart-spinner>
```

## Component API
| Property| Description  |
|------|---|
|id|uniq identifier of your spinner (can be duplicated in case when we want use a few spinners for one http request)|
|size|set the size of your spinner in px, default is 50px|

