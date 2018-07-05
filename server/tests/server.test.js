
var expect=require('expect');
var request=require('supertest');
var {app}=require('../server.js');
var {Todo} = require('../models/todo');

// var expect = require('expect');
// var request = require('supertest');

// var {app} = require('../server');
// var {Todo} = require('./../models/todo');
beforeEach((done)=>{
Todo.remove({}).then(()=>done());
})


describe('Post/Todos',()=>{
    it('should create a new Todo',(done)=>{
        var text='go Ina';
        request(app)
        .post('/todos')
        .send({text})
        .expect(res=>{
           expect(res.body.text).toBe(text);
        })
        .end((err,res)=>{
            if(err)
            {console.log("there was some error")
                return done(err);
            }
            Todo.find().then((result)=>{
                console.log("inside");
                expect(result.length).toBe(1);
                expect(result[0].text).toBe(text);
                done();
            }).catch((e)=>{
                console.log("there was some error catch");
                done(e)})
        })
    })
})
it("should not create Todo when bad data is given",(done)=>{
    request(app)
    .post('/todos')
    .send({})
    .end((err,res)=>{
        if(err)
        {
            return done(err);
        }
        Todo.find().then((todos)=>{
            console.log(todos.length)
            expect(todos.length).toBe(0);
            done();
          }).catch((err)=>done(err));
    })
})
it("should give all Todos",(done)=>{
    request(app)
    .get('/todos')
    .end((err,res)=>{
        console.log(res.body);
        if(err)
        {
            return done(err);
        }
        Todo.find().then((todos)=>{
            expect(todos.length).toBe(res.body.length);
        done();
        }).catch(e=>done(e))
    })
})


// beforeEach((done) => {
//   Todo.remove({}).then(()=>done());
// });

// describe('POST /todos', () => {
//   it('should create a new todo', (done) => {
//     var text = 'Test todo text';

//     request(app)
//       .post('/todos')
//       .send({text})
//       .expect((res) => {
//         expect(res.body.text).toBe(text);
//       })
//       .end((err, res) => {
//         if (err) {
//           return done(err);
//         }

//         Todo.find().then((todos) => {
//           expect(todos.length).toBe(1);
//           expect(todos[0].text).toBe(text);
//           done();
//         }).catch((e) => done(e));
//       });
//   });

// //   it('should not create todo with invalid body data', (done) => {
// //     request(app)
// //       .post('/todos')
// //       .send({})
// //       .expect(400)
// //       .end((err, res) => {
// //         if (err) {
// //           return done(err);
// //         }

// //         Todo.find().then((todos) => {
// //           expect(todos.length).toBe(0);
// //           done();
// //         }).catch((e) => done(e));
// //       });
// //   });
// // });

// //
//  })