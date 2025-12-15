///<reference types="cypress"/>
before(function(){
    cy.fixture('example.json').as('test_data')
     
})

it("Read file using Fixture",()=>{              //alternate method to read file
    cy.fixture('example.json').then((data)=>{
        cy.log(data.name)
        cy.log(data.email)
    })
   //cy.log(this.test_data.name)
})

it("Read file usig readfile",()=>{              //alternate method to read file
    cy.readFile('./cypress/fixtures/example.json').then((data)=>{
        cy.log(data.name)
    })

})
it('Write file demo',()=>{
    cy.writeFile('sample.txt','Hello I am learning cypress\n') //we can also mention path of file
    cy.writeFile('sample.txt','Hello I am Roshani',{flag:"a+"}) //to escape the overwriting of file
})
