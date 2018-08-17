# Lab-9 Cookie Stand
This Salmon Cookies application gives you the ability to give a minimum and maximum customer base, along with an average cookie purchased per customer. After inputting this information the program will output a random amount of customers in between the minimum and maximum that you provided. This amount generated will multiply itself by the average amount of cookies that are purchased per customer and give you a ball park estimate of the needed cookies per store per hour. 
The last column on the right hand side is totaling the amount of cookies needed per day and the footer row is totaling the amount of cookies needed each hour for all the stores listed.
The bottom right hand cell of the table will provide the total of all the cookies needed for all stores for the entire day.

**Wednesday-take2**
Added <fieldset> tag to html.

I went back to make sure decimal numbers are able to be inputted in the cookie average input tag by adding the step attribute and setting it to "0.1". 
I also made sure to change the type to "number" for all input boxes expecting numbers. 

Moved my funcCustomers and my funcCookies function to the render prototype to make sure it is only happening once per each instance created.

Gave my footer element an ID, giving me the ability to point to the footer and remove it by ID before each new instanced object is created. Then adding it back with the makeFooter method.

mmmmm....salmon cookies... <3
