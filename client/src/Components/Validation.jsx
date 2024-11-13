export default function Validation(values){
        //create errors array
         let errors={}
         //creating patterns for email and password
         const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
         

          //validating patterns from front-end
         if(values?.name)
          {
               if(values.name==="")
               {
                  errors.name="Name Should Not Empty."
               }
              // else if(values.name.length<3||values.name.length >30)
              // {
              //      errors.name="Name must be between 3-30"
              // }
               else
               {
                 errors.name=""
               }
          }

        /* if(values.lastname==="")
            {
               errors.lastname="Name Should Not be Empty."
            }else if(values.lastname.length<3||values.lastname.length >30)
            {
               errors.lastname="Name must be between 3-30"
            }else{
               errors.lastname=""
            }*/

             if(values.email==="")
             {
               errors.email="Email Should Not Empty."
            
            }
            else
            {
               errors.email=""
            }

            if(values.password==="")
            {
                errors.password="Password should not empty"
            }
         // else if(!password_pattern.test(values.password))
          //  {
          //     errors.password="1 small and capital char a Number to {8}"
          //  }
             else
             {
                errors.password=""
             
             }

          /*  if(values.phonenumber===""){
                errors.phonenumber="Phone Number should not empty"
          //  }else if(!phno_pattern.test(values.phonenumber))
           //  {
             //   errors.phonenumber="there must be 10 numbers"
            }else{
                errors.phonenumber=""
            }*/

            return errors;

        }