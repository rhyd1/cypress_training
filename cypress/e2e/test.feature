Feature: Testing for file upload

    As a user I am trying to upload both valid and invalid files
    Scenario Outline: File upload for valid and invalid files <filename>
        Given that I am a able to access the file upload URL
        When I click on the "Choose file"
        And I upload the "<filename>"

        Examples:
            | filename | 
            | cypress/fixtures/example.jpg  |
            | cypress/fixtures/example.csv  |
            | cypress/fixtures/example.json  |

    Scenario Outline: Testing for ShadowDOM
        Given that I am able to access the shadowDOM URL
        Then I insert username
