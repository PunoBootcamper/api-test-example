const request = require('supertest');
const app = require('../../app');

describe('Tasks API', () => {
    it('should get all tasks', async () => {

        // Act
        const response = await request(app).get('/api/tasks');

        // Arrange
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
      });
    it('should create a new task', async () => {
        // Arrange
        const task = {
            title: 'Task Test',
            description: 'Description test'
        };

        // Act
        const response = await request(app)
            .post('/api/tasks')
            .send(task);

        // Assert
        expect(response.statusCode).toBe(201);
        expect(response.body.title).toBe(task.title);
    })

    it('should get a single task by ID', async () => {
        // Arrange
        const taskId = 1;

        // Act
        const response = await request(app).get(`/api/tasks/${taskId}`);

        // Assert
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('id', taskId);
    });

    it('should update a task', async () => {
        // Arrange
        const taskId = 1;
        const updatedTask = {
            title: 'Updated Task',
            description: 'Updated Description'
        };

        // Act
        const response = await request(app)
            .patch(`/api/tasks/${taskId}`)
            .send(updatedTask);

        // Assert
        expect(response.statusCode).toBe(200);
        expect(response.body.title).toBe(updatedTask.title);
        expect(response.body.description).toBe(updatedTask.description);
    });

    it('should delete a task', async () => {
        // Arrange
        const taskId = 1;

        // Act
        const response = await request(app).delete(`/api/tasks/${taskId}`);

        // Assert
        expect(response.statusCode).toBe(204);
    });

    it('should return 404 for a task not found', async () => {
        // Arrange
        const taskId = 999;

        // Act
        const response = await request(app).get(`/api/tasks/${taskId}`);

        // Assert
        expect(response.statusCode).toBe(404);
        expect(response.body).toHaveProperty('message', `Task not found with id: ${taskId}`);
    });
})