# productid,productname,unitprice
# 1,Thumsup,75
# 2,oil,100
# 3,rice,75
#the customer will run the program
#The program will show the list of products to the customer
#Customer will select the product id
#Customer will provide name, phone number
#Customer will provide the quantity
#The system will write the customer details and product amount into another file

# Customername,customerphonenumber,productid,qty,unitprice,total
# sanjoy,1234567890,1,2,75,15

# Reading the product csv file
f = open("product.csv")
products = f.readline()

product_lst = []
for i in f:
    product_lst.append(i.split(","))

f.close()

f = open("product.csv")
cust_products = f.read()
f.close()

#Accepting the inputs from the customer
cust_name = input("Enter your name: ")
cust_number = int(input("Enter your mobile number:"))

#List of the products available
print(cust_products)

#Input the product details
product_id = input("Enter the product id: ")
quantity = int(input("Enter the quantity required: "))

unit_price = 0

def product_sale(lst,product_id,qty):
    total = 0
    global unit_price
    for sales in lst:
        if product_id == sales[0]:
            unit_price = sales[2]
            total += qty * int(sales[2].replace("\n",""))
    return total

product_total = product_sale(product_lst, product_id, quantity)

# Writing the customer info to the details file
products_sale_lst = ["\n",cust_name,",",str(cust_number),",",product_id,",",str(quantity),",",str(unit_price),",",str(product_total)]
w = open("details.csv", "a")
w.writelines(products_sale_lst)

w.close()
