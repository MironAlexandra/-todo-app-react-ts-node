import { RequestHandler } from 'express';
import { Request, Response } from 'express';
import * as TaskModel from '../models/taskModel';

export const getTasks: RequestHandler = async (req, res) => {
    const tasks = await TaskModel.getAllTasks();
    res.json(tasks);
};

export const create = async (req: Request, res: Response): Promise<void> => {
    const { title, description = '' } = req.body;

    if (!title) {
        res.status(400).json({ error: 'Title is required' });
        return;
    }

    try {
        const newTask = await TaskModel.createTask(title, description, false);
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
