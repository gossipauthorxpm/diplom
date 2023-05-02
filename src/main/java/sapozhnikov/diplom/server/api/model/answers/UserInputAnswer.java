package sapozhnikov.diplom.server.api.model.answers;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public abstract class UserInputAnswer {
     String message;
     boolean action;
}
