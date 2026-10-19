# Deriving the Allen–Cahn equation from first principles

Starting from a free-energy functional, derive the **Allen–Cahn (AC) equation** and connect the double-well potential, gradient energy, and phase-field dynamics.

To make the derivation concrete, consider a simple **one-dimensional competition between two phases**.

---

### Setting the scene: red and blue phases on a rod

* **Geometry:** a one-dimensional rod with coordinate $x$.
* **Order parameter $\phi(x)$:**
  * $\phi = 1$ represents the **red phase**, such as a solid.
  * $\phi = -1$ represents the **blue phase**, such as a liquid.
  * For mathematical symmetry, use 1 and −1 instead of 0 and 1; the underlying idea is the same.
* **Goal:** derive an equation describing how $\phi$ evolves with time $t$.

---

### Step 1: construct the energy functional

Start with energy. The total free energy $F$ has two contributions: **the local preference of each point** and **the cost of differing from its neighbors**.

$$ F[\phi] = \int_{\text{rod}} \left( \underbrace{f_{bulk}(\phi)}_{\text{bulk free energy}} + \underbrace{\frac{\kappa}{2} \left( \frac{\partial \phi}{\partial x} \right)^2}_{\text{gradient energy}} \right) dx $$

#### 1. Bulk free energy: a double-well potential

The material favors the stable states $\phi=1$ and $\phi=-1$ rather than the intermediate state $\phi=0$. A typical **W-shaped potential** is

$$ f_{bulk}(\phi) = A (\phi^2 - 1)^2 $$

* At $\phi = 1$ or $\phi = -1$, $f = 0$: the energy is minimal.
* At $\phi = 0$, $f = A$: the energy is higher.
* These minima are the two **potential wells**.

#### 2. Gradient energy: the cost of an interface

$$ \frac{\kappa}{2} (\nabla \phi)^2 $$

When $\phi$ changes sharply, this contribution becomes large. Reducing the energy therefore favors a smoother interface.

---

### Step 2: calculate the driving force

Ask: **if $\phi$ changes slightly, how does the total energy $F$ change?** This is the **functional derivative** $\frac{\delta F}{\delta \phi}$.

Calculate the two contributions separately.

#### A. Differentiate the bulk free energy

This is an ordinary derivative:

$$ \frac{\partial f_{bulk}}{\partial \phi} = \frac{\partial}{\partial \phi} [A(\phi^2 - 1)^2] = A \cdot 2(\phi^2 - 1) \cdot 2\phi = 4A(\phi^3 - \phi) $$

This term drives the order parameter back toward one of the potential wells, at 1 or −1.

#### B. Differentiate the gradient energy

The gradient contribution uses **integration by parts in the calculus of variations**. Take the variation of $\int \frac{\kappa}{2} (\phi_x)^2 dx$.

The Euler–Lagrange calculation gives

$$ \frac{\delta}{\delta \phi} \left( \frac{\kappa}{2} (\phi_x)^2 \right) = - \kappa \frac{\partial^2 \phi}{\partial x^2} $$

Notice the negative sign and the second spatial derivative, or Laplacian. This contribution penalizes sharp differences between neighboring points and smooths the interface.

#### C. Combine the contributions

$$ \frac{\delta F}{\delta \phi} = \underbrace{4A(\phi^3 - \phi)}_{\text{preference for a well}} - \underbrace{\kappa \nabla^2 \phi}_{\text{interface smoothing}} $$

---

### Step 3: assemble the evolution equation

The guiding principle of **Allen–Cahn dynamics** is that the **rate of change is proportional to the negative energy gradient**: the system evolves toward lower energy.

$$ \frac{\partial \phi}{\partial t} = -L \times \frac{\delta F}{\delta \phi} $$

Substitute the two contributions:

$$ \frac{\partial \phi}{\partial t} = -L \left[ 4A(\phi^3 - \phi) - \kappa \nabla^2 \phi \right] $$

Rearrange the signs to obtain the **AC equation**:

$$ \boxed{ \frac{\partial \phi}{\partial t} = L \left( \kappa \nabla^2 \phi - 4A(\phi^3 - \phi) \right) } $$

---

### Step 4: interpret the physics

Two competing effects determine the evolution of $\phi$.

#### 1. Diffusion: $L\kappa \nabla^2 \phi$

* **Role:** smoothing.
* **Behavior:** this is the familiar diffusion term. It tends to make $\phi$ more uniform, broadens sharp interfaces, and reduces the gradient penalty.
* In intuitive terms: let neighboring points vary more gently.

#### 2. Reaction: $-4AL(\phi^3 - \phi)$

* **Role:** choosing a phase.
* **Behavior:**
  * If $\phi$ is slightly positive, such as 0.1, this term pushes it toward 1.
  * If $\phi$ is slightly negative, such as −0.1, it pushes it toward −1.
  * This effect is described here as **sharpening** or **anti-diffusion**.
* In intuitive terms: choose one of the two phases rather than remaining near zero.

---

### What is the AC equation computing?

Its evolution reflects a **balance between two effects**:

1. The **reaction term** sharpens the interface by pushing points toward 1 or −1.
2. The **diffusion term** broadens the interface to reduce spatial gradients.

Together, they produce a **smooth diffuse interface with a characteristic width**, associated with a hyperbolic tangent profile $\tanh(x)$. This explains how the phase-field description maintains a smooth transition between phases.

## Related parameters

The next question is practical: how do mathematical parameters become simulation inputs?

In the derivation, $A$, $\kappa$, and $L$ are **model parameters**. In a simulation of a real material—such as steel, a battery material, or a polymer—they must be related to **material properties**.

This requires a mapping from macroscopic quantities to the model parameters.

---

### 1. Available material properties

Material handbooks or papers commonly provide the following quantities:

1. **Surface tension or interfacial energy, $\gamma$**
   * Unit: $J/m^2$.
   * Meaning: the energy needed to create a unit area of interface.
2. **Interface thickness, $\delta$**
   * Unit: $m$.
   * Meaning: the physical thickness of the interface, often only a few nanometers.
   * In numerical work, the interface is often deliberately widened to reduce mesh costs, while keeping it small relative to the relevant microstructural scale.
3. **Interface mobility, $M_{gb}$**
   * Units used in the original notes include $m^4/(J \cdot s)$ or $m/s \cdot K^{-1}$, depending on the driving-force convention.
   * Meaning: how quickly an interface moves in response to a driving force.

---

### 2. Mapping static parameters: $A$ and $\kappa$

The **barrier height $A$** and **gradient coefficient $\kappa$** jointly determine the interface profile and energy. Integrating the equilibrium phase-field equation gives a hyperbolic tangent profile and relates these quantities.

#### Relations recorded in these notes

$$ \gamma = \frac{2\sqrt{2}}{3} \sqrt{\kappa A} $$

$$ \delta \approx \sqrt{\frac{\kappa}{A}} \times (\text{constant, typically 2 to 4}) $$

The parameter mapping used in the example is

1. **Potential-well depth:**

   $$ A = \frac{3 \gamma}{\sqrt{2} \delta} $$

   Intuitively, a larger interfacial energy or a thinner interface requires a deeper potential well.

2. **Gradient penalty:**

   $$ \kappa = \frac{3 \gamma \delta}{\sqrt{2}} $$

   The gradient coefficient connects the interfacial energy with the chosen interface thickness.

> **A practical workflow**
>
> 1. Choose the mesh spacing $dx$.
> 2. Choose the numerical interface thickness $\delta$, for example $4dx \sim 5dx$, so that several mesh points resolve the interface.
> 3. Obtain $\gamma$ from material data.
> 4. Calculate $A$ and $\kappa$ and use them in the simulation.

---

### 3. Mapping the kinetic parameter: $L$

The **phase-field relaxation coefficient $L$** sets the rate of evolution. It must be related to the physical **interface mobility $M_{gb}$**.

In an asymptotic description, the diffuse-interface model approaches a sharp-interface relation such as $V = M_{gb} \cdot \Delta G$ as $\delta \to 0$.

#### Mapping forms recorded in these notes

$$ L = \frac{M_{gb}}{\delta} \times (\text{shape factor}) $$

Another form, dependent on the potential and parameter conventions, is

$$ L = \frac{M_{gb}}{\kappa} \times (\text{coefficient}) $$

* Faster physical interface motion, represented by a larger mobility, requires a corresponding kinetic coefficient.
* When the numerical interface is widened, its internal dynamics must be adjusted to preserve the intended interface velocity $V$.

---

### 4. From material data to code

For a pure-metal solidification example, the notes organize the mapping as follows:

| Code parameter | Inputs | Scaling used in the notes | Physical role |
| :--- | :--- | :--- | :--- |
| $A$ | Interfacial energy and mesh | $\propto \frac{\gamma}{\delta_{num}}$ | Depth of the potential well; tendency to sharpen the interface |
| $\kappa$ | Interfacial energy and mesh | $\propto \gamma \cdot \delta_{num}$ | Gradient penalty; tendency to broaden the interface |
| $L$ | Mobility and mesh | $\propto \frac{M_{gb}}{\delta_{num}}$ | Rate of phase-field evolution |

### 5. A numerical example

Consider a gold (Au) example:

1. **Material input:** use a surface-tension value of $1.5$ in the example's unit convention.
2. **Mesh:** let $dx = 10 \, nm$.
3. **Interface:** choose $\delta = 4dx = 40 \, nm$. This is a numerical interface thickness, wider than the physical interface.
4. **Calculate the parameters:**
   * $A = \frac{3 \times 1.5}{\sqrt{2} \times 40 \times 10^{-9}} \approx 7.9 \times 10^7$
   * $\kappa = \frac{3 \times 1.5 \times 40 \times 10^{-9}}{\sqrt{2}} \approx 1.27 \times 10^{-7}$

The example uses $7.9 \times 10^7$ and $1.27 \times 10^{-7}$ to connect the internal parameters with the intended macroscopic interfacial behavior. This is the idea behind a **phenomenological model**: tune an internal description to reproduce a macroscopic phenomenon.
