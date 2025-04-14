import { Request, Response } from 'express';
import * as TaskModel from '../models/taskModel';

export const getTasks = async (req: Request, res: Response) => {
    const tasks = await TaskModel.getAllTasks();
    res.json(tasks);
};

export const create = async (req: Request, res: Response) => {
    const { title, description } = req.body;
    const newTask = await TaskModel.createTask(title, description);
    res.status(201).json(newTask);
};

export const update = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const updates = req.body;
    const updatedTask = await TaskModel.updateTask(id, updates);
    res.json(updatedTask);
};

export const remove = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    await TaskModel.deleteTask(id);
    res.status(204).send();
};
