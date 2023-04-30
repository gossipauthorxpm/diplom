package sapozhnikov.diplom.server.api.model.answers;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public abstract class UserInputAnswer {
     String message;
     boolean action;
}
