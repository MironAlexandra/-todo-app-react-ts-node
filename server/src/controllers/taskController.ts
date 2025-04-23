import { RequestHandler } from 'express';
import { Request, Response } from 'express';
import * as TaskModel from '../models/taskModel';

export const getTasks: RequestHandler = async (req, res) => {
    const tasks = await TaskModel.getAllTasks();
    res.json(tasks);
};

export const create = async (req: Request, res: Response): Promise<void> => {
    const { title, description = '', completed = false } = req.body;

    if (typeof title !== 'string' || title.trim() === '') {
        res.status(400).json({ error: 'Title is required and must be a non-empty string' });
        return;
    }

    if (typeof description !== 'string') {
        res.status(400).json({ error: 'Description must be a string' });
        return;
    }

    if (typeof completed !== 'boolean') {
        res.status(400).json({ error: 'Completed must be a boolean value' });
        return;
    }

    try {
        const newTask = await TaskModel.createTask(title.trim(), description.trim(), completed);
        res.status(201).json(newTask);
    } catch (err) {
        console.error('Error creating task:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const update: RequestHandler = async (req, res) => {
    const id = parseInt(req.params.id);
    const updates = req.body;

    try {
        const updatedTask = await TaskModel.updateTask(id, updates);
        res.json(updatedTask);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update task' });
    }
};

export const remove: RequestHandler = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        await TaskModel.deleteTask(id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete task' });
    }
};
