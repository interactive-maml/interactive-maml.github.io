
import { Random2DLinearRegressionLossSpace } from './LossSpace.js'
import { VectorGroup } from './VectorGroup.js'

export class Regression2DTaskGroup {
    constructor(initialParams, optimals, lr) {
        this.center = initialParams
        this.tasks = this.createTasks(optimals)
        this.lr = lr
    }

    declare(labelIds) {
        var takeOneStepParams = this.takeOneStep(this.center)

        var defaultVectors = takeOneStepParams.map((params, i) => {
            return { id: labelIds[i], x: params[0], y: params[1] }
        })

        var vectorGroup = new VectorGroup(this.svg, { x: this.center[0], y: this.center[1] }, defaultVectors, this.coordinateConversions)

        this.vectorGroup = vectorGroup.declare()

        return this
    }

    animate() {
        this.vectorGroup.animate()
    }

    createTasks(optimals) {
        return optimals.map(opt => new Random2DLinearRegressionLossSpace(opt))
    }

    takeOneStep(params) {
        return this.tasks.map(task => task.toArray(task.paramUpdate([params], this.lr, true)))
    }

    getLossData() {
        // to be extended
        return this.tasks.map((task, i) => {
            return { index: i }
        })
    }
}
