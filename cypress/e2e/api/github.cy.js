//Criar um Personal Access Token no GitHub
// Vá em https://github.com/settings/tokens
// Clique em “Generate new token (classic)”
// Dê as mínimas permissões: repo e delete_repo
// Copie o token e adicione junto ao seu nome de usuario no cypress.env.json.

describe('API do GitHub', () => {
    const token = `token ${Cypress.env('github_token')}`;
    const user = Cypress.env('github_user');
    const GITHUB_API = 'https://api.github.com';
    const nomeRepo = `nexdom-${Date.now()}`;
    const issuesCy = "OCTOCAT";


    it('criação de um repositório no github', () => {
        cy.request({
            method: 'POST',
            url: `${GITHUB_API}/user/repos`,
            headers: {
                Authorization: token
            },
            body: {
                name: nomeRepo,
                description: 'Unique identifier of the issue comment',
                private: false
            }
        }).then((resp) => {
            expect(resp.status).to.eq(201);
            cy.log(resp.body.name);
        });
    });

    it('consulta do repositório criado', () => {
        cy.request({
            method: 'GET',
            url: `${GITHUB_API}/repos/${user}/${nomeRepo}`,
            headers: {
                Authorization: token
            }
        }).then((resp) => {
            expect(resp.status).to.eq(200);
            expect(resp.body.name).to.eq(nomeRepo);
        });
    });

    it('criação de uma issue no repositório recém-criado', () => {
        cy.request({
            method: 'POST',
            url: `${GITHUB_API}/repos/${user}/${nomeRepo}/issues`,
            headers: {
                Authorization: token
            },
            body: {
                title: issuesCy,
                body: "I'm having a problem with this."
            }
        }).then((resp) => {
            expect(resp.status).to.eq(201);
            expect(resp.body.title).to.eq(issuesCy);
        });
    });

    it('consulta da issue', () => {
        cy.wait(3000);
        cy.request({
            method: 'GET',
            url: `${GITHUB_API}/repos/${user}/${nomeRepo}/issues`,
            headers: {
                Authorization: token
            }
        }).then((resp) => {
            expect(resp.status).to.eq(200);
            expect(resp.body.length).to.be.greaterThan(0);
            expect(resp.body[0].title).to.eq(issuesCy);
        });
    });
    it('exclusão do repositório', () => {
        cy.request({
            method: 'DELETE',
            url: `${GITHUB_API}/repos/${user}/${nomeRepo}`,
            headers: {
                Authorization: token
            }
        }).then((resp) => {
            expect(resp.status).to.eq(204);
        });
        cy.log('deletou o ', nomeRepo)
    });

    it('verificar se o repositório foi eliminado', () => {
        cy.request({
            method: 'GET',
            url: `${GITHUB_API}/repos/${user}/${nomeRepo}`,
            headers: {
                Authorization: token
            },
            failOnStatusCode: false
        }).then((resp) => {
            expect(resp.status).to.eq(404);
        });
    });
});