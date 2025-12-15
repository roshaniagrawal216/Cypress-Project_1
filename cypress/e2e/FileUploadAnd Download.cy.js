///<reference types="cypress"/>
it('File Upload test',function(){           //file upload
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#myfile').attachFile('Picture1.png')
})

it('File Download test',function(){           //file upload
    
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
   
})