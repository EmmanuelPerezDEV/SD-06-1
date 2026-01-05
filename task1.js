function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }
  
  // Type your code below this line!
  
  const newMail = new Mail( 
    this.subject = "Hello",
    this.message = "world"
   )
  
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message)