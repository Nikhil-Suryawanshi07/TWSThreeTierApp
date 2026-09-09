import React from "react";
import Tasks from "./Tasks";
import { Paper, TextField, Checkbox, Button } from "@material-ui/core";
import "./App.css";

class App extends Tasks {
    state = { tasks: [], currentTask: "" };

    render() {
        const { tasks, currentTask } = this.state;

        const completedTasks = tasks.filter(task => task.completed).length;
        const xp = completedTasks * 100;

        return (
            <div className="game-app">

                {/* HEADER */}
                <header className="game-header">
                    <div>
                        <div className="game-title">
                            ⚔️ QUEST BOARD
                        </div>
                        <p>Complete your daily missions</p>
                    </div>

                    <div className="level-box">
                        <span>LEVEL</span>
                        <strong>01</strong>
                    </div>
                </header>

                {/* PLAYER CARD */}
                <div className="player-card">

                    <div className="player-avatar">
                        🧙
                    </div>

                    <div className="player-info">
                        <h2>Task Warrior 👑</h2>

                        <div className="xp-bar">
                            <div
                                className="xp-progress"
                                style={{
                                    width: `${Math.min(xp / 10, 100)}%`
                                }}
                            />
                        </div>

                        <span>XP {xp} / 1000</span>
                    </div>

                    <div className="score-box">
                        <span>🏆 SCORE</span>
                        <strong>{completedTasks * 100}</strong>
                    </div>

                </div>

                {/* QUEST BOARD */}
                <Paper className="quest-board" elevation={8}>

                    <div className="quest-header">
                        <h2>📜 ACTIVE QUESTS</h2>

                        <span className="quest-count">
                            {tasks.length} QUESTS
                        </span>
                    </div>

                    {/* ADD TASK */}
                    <form
                        onSubmit={this.handleSubmit}
                        className="quest-form"
                    >

                        <TextField
                            variant="outlined"
                            size="small"
                            className="quest-input"
                            value={currentTask}
                            required={true}
                            onChange={this.handleChange}
                            placeholder="Enter your next quest..."
                        />

                        <Button
                            className="add-quest-btn"
                            type="submit"
                        >
                            ⚔ ADD QUEST
                        </Button>

                    </form>

                    {/* TASKS */}
                    <div className="quests-list">

                        {tasks.length === 0 && (
                            <div className="empty-quests">
                                <div className="chest">🎁</div>
                                <h3>No quests yet!</h3>
                                <p>
                                    Add your first quest and start your adventure.
                                </p>
                            </div>
                        )}

                        {tasks.map((task, index) => (

                            <Paper
                                key={task._id}
                                className={
                                    task.completed
                                        ? "quest-item completed-quest"
                                        : "quest-item"
                                }
                            >

                                <div className="quest-number">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <div className="quest-icon">
                                    {task.completed ? "🏆" : "⚔️"}
                                </div>

                                <div className="quest-content">

                                    <div
                                        className={
                                            task.completed
                                                ? "quest-text completed"
                                                : "quest-text"
                                        }
                                    >
                                        {task.task}
                                    </div>

                                    <span className="quest-type">
                                        {task.completed
                                            ? "QUEST COMPLETED"
                                            : "MAIN QUEST"}
                                    </span>

                                </div>

                                <Checkbox
                                    checked={task.completed}
                                    onClick={() =>
                                        this.handleUpdate(task._id)
                                    }
                                    className="complete-checkbox"
                                />

                                <Button
                                    onClick={() =>
                                        this.handleDelete(task._id)
                                    }
                                    className="delete-quest-btn"
                                >
                                    🗑
                                </Button>

                            </Paper>

                        ))}

                    </div>

                </Paper>

                {/* FOOTER */}
                <footer className="game-footer">
                    ⚡ STAY FOCUSED
                    <span>•</span>
                    COMPLETE QUESTS
                    <span>•</span>
                    EARN XP
                    <span>•</span>
                    LEVEL UP 🚀
                </footer>

            </div>
        );
    }
}

export default App;
